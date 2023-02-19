import React from "react";
const Comment = ({ commentData }) => {
  //console.log(commentData);
  return (
    <div className="m-2 p-2 flex ">
      <img
        className="rounded-full w-12 h-12"
        alt="img"
        src="https://yt3.ggpht.com/X9eoDIB9cgb1s-kvATRs1lQDcU4Fjc15NDV9s9FF8ck7IsA8u7OdijaernoDV9LLdePgjlt_=s88-c-k-c0x00ffffff-no-rj"
      />
      <div>
        <div className="font-bold mx-2">Warikoo {commentData.name}</div>
        <div className="mx-2 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          minus unde, obcaecati assumenda iusto incidunt quis facere! Nostrum,
          atque molestias.
          {commentData.message}
        </div>
        <div className="mt-2">
          {commentData.comment.map((comment)=> <Comment commentData={comment} key={comment.id}/>)}
        </div>
      </div>
    </div>
  );
};

export const CommentContainer = () => {
  const comments = [
    { id: 1,
      name: "Jatin",
      message: "I love react",
      comment : [
        { id: 2,
          name: "Wariko",
          message: "This is epic ",
          comment : [
            { id: 3,
              name: "Jatin",
              message: "I love react",
              comment : [
                { id: 4,
                  name: "Wariko",
                  message: "This is epic ",
                  comment : [
                    { id : 5,
                      name: "Jatin",
                      message: "I love react",
                      comment : [
                        { id: 6,
                          name: "Wariko",
                          message: "This is epic ",
                          comment : []
                        }
                      ]
                    },
                  ]
                }
              ]
            },
          ]
        }
      ]
    },
    { id:7,
      name: "Jatin",
      message: "I love react",
      comment : [
        { id: 8,
          name: "Wariko",
          message: "This is epic ",
          comment : []
        }
      ]
    },
    { id: 9,
      name: "Jatin",
      message: "I love react",
      comment : [
        { id: 10,
          name: "Wariko",
          message: "This is epic ",
          comment : []
        }
      ]
    },
     
  ];

  return (
    <div className="my-2 p-2 bg-gray-200 w-full">
      <div className="m-2 p-2 text-xl">Comments</div>
      {comments.map((comment) => {
        //console.log(comment.id)
        return <Comment commentData={comment} key={comment.id}/>
      })}
      {/* <Comment commentData={commentObj[0]} /> */}
    </div>
  );
};
