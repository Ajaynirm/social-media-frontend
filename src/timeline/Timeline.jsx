import React from 'react'
import { useState } from 'react';
import "./Timeline.css";
import Suggestion from './Suggestion';
import Post from './post/Post';
const Timeline = () => {
  const [posts,setPosts] = useState([
    {
      user: "ajay",
      image: "./img1.png",
      time: "1 min ago" ,
      like: 12,

    },
    {
      user: "abishek",
      image: "./img2.png",
      time: "2 hours ago" ,
      like: 120,

    },
    {
      user: "kabilan",
      image: "./img3.png",
      time: "10 min ago",
      like: 12,
    },
    {
      user: "meta",
      image: "./img1.png",
      time: "20 min ago" ,
      like: 14,
    },
    {
      user: "ajith",
      image: "./img2.png",
      time: "1 min ago" ,
      like: 4,
    },
    {
      user: "remo",
      image: "./img3.png",
      time: "1 min ago" ,
      like: 17,
    },
    {
      user: "loneMan",
      image: "./img1.png",
      time: "1 min ago" ,
      like: 19,
    },
    {
      user: "mr.playBoy",
      image: "./img2.png",
      time:"1 min ago" ,
      like: 120,
    },
    {
      user: "jay",
      image: "./img3.png",
      time: "1 min ago" ,
      like: 140,
    }
  ]);
  return (
    <div className="timeline">
      <div className="timeline_left">
      {posts.map((post,index) => (
                <Post key={index} user={post.user} image={post.image} time={post.time} like={post.like} />
      ))}
       
      </div>
      <div className="timeline_right">
        <Suggestion />
      </div>
    </div>
  )
}

export default Timeline
