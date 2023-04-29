import { isPending } from "@reduxjs/toolkit";
import React from "react";

const CommentsSection = () => {
  const commentsData = [
    {
      name: "Rahul",
      comment: "lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Ritesh",
      comment: "lorem ipsum dolor sit amet, consectetur adip",
      replies: [{
        name: "Himanshu",
        comment: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Kamal",
            comment: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Rohit",
                comment: "lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Rahul",
                    comment: "lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Rahul",
            comment: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Hello",
                comment: "lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Rahul",
                    comment: "lorem ipsum dolor sit amet, consectetur adip",
                    replies: [{
                      name: "Rahul",
                      comment: "lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },],
                  },
                ],
              },
            ],
          },
        ],
      }],
    },
    {
      name: "John",
      comment: "lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Himanshu",
          comment: "lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Kamal",
              comment: "lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Rohit",
                  comment: "lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Rahul",
                      comment: "lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "Rahul",
              comment: "lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Hello",
                  comment: "lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Rahul",
                      comment: "lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Rohan",
          comment: "lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
      ],
    },
    {
      name: "Rahul",
      comment: "lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Riya",
          comment: "lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Prashant",
          comment: "lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
      ],
    },
    {
      name: "Arjun",
      comment: "lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Karan",
          comment: "lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
      ],
    },
  ];

  const Comment = ({ data }) => {
    const { name, comment, replies } = data;
    return (
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img
        className="w-12 h-12"
          alt="user-img"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{comment}</p>
        </div>
      </div>
    );
  };
  
  const CommentsList=({comments})=>{
    return comments?.map((comment,j)=>(
    <div key={j}>
    <Comment key={j} data={comment}/>
    <div className="pl-5 border border-l-black ml-5">
   <CommentsList comments={comment.replies}/>
    </div>
    </div>
    ))
  }

  return (
    <div className="m-2 p-5">
      <h1 className="text-2xl font-bold">Comments : </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsSection;
