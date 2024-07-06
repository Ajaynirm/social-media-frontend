import React from 'react'
import "./Timeline.css";
import Suggestion from './Suggestion';
import Post from './post/Post';
const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline_left">
        <Post />
        <Post />
        <Post />
      </div>
      <div className="timeline_right">
        <Suggestion />
      </div>
    </div>
  )
}

export default Timeline
