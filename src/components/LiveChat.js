import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import { store } from "../utils/store";
 
const LiveComment = ({ commentData }) => {
  //console.log(commentData);
  return (
    <div className="m-2 p-2 flex ">
      <img
        className="rounded-full w-8 h-8"
        alt="img"
        src= "https://yt3.ggpht.com/X9eoDIB9cgb1s-kvATRs1lQDcU4Fjc15NDV9s9FF8ck7IsA8u7OdijaernoDV9LLdePgjlt_=s88-c-k-c0x00ffffff-no-rj"
      />
      <div className="">
        <div className="font-bold mx-2">Warikoo {commentData.name}</div>
        <div className="mx-2 ">{commentData.message}</div>
      </div>
    </div>
  );
};

export const LiveChat = () => {
  
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.liveChat.messages);
  useEffect(()=>{
    const i = setInterval(()=>{         // API POLLING
      dispatch(addChat({
        name : generateRandomName(),
        message : generateRandomMessage()
      }));
    },2000)
    return ()=> clearInterval(i);
  },[])
  
  return (
    <div className=" pb-2 h-full bg-gray-200 w-[26rem]">
      <div className="p-2 mb-2 font-bold text-gray-600 shadow">LiveChat</div>     
      <div className="mb-2 bg-gray-200 shadow h-[454px] flex flex-col-reverse overflow-y-scroll">  
        {chatMessages.map((message, index) => <LiveComment commentData={message} key={index} />)}
      </div>

      {/* img input btn */}
      <form className="m-2 p-2 flex shadow " onSubmit={(e)=>{
        e.preventDefault();
        liveMessage.length!==0 &&
        dispatch(addChat({ name: "Warikoo", message: liveMessage }));
        setLiveMessage("");
      }}>
        <img
          className="rounded-full w-12 h-12"
          alt="img"
          src="https://yt3.ggpht.com/X9eoDIB9cgb1s-kvATRs1lQDcU4Fjc15NDV9s9FF8ck7IsA8u7OdijaernoDV9LLdePgjlt_=s88-c-k-c0x00ffffff-no-rj"
        />
        <div className="flex flex-col">
          <div className="font-bold mx-2  ">Warikoo </div>
          <input
            className="p-1 ml-2 w-72 border rounded  "
            type="text"
            placeholder="Message"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
        </div>
        <div className="flex items-end pl-1">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};
