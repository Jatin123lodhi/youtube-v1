import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { hideSideBar } from "../utils/appSlice";
import { CommentContainer } from "./CommentContainer";
import { LiveChat } from "./LiveChat";

export const WatchPage = () => {
  // to id comming from url useParam
  window.scroll(0,0);
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));

  //we have to dispatch an action so that side  collapses
  const dispatch = useDispatch();
  dispatch(hideSideBar());

  return (
    <div className="flex">
      <div className="pl-20 ">
        <iframe
          width="905"
          height="510"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <CommentContainer />
      </div>
      <div className="h-[612px] px-4 ml-6 border mr-4 border-gray-300 bg-gray-100 rounded p-2">
        <LiveChat />
      </div>
    </div>
  );
};
