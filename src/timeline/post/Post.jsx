import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Post = ({ user, image,time, like }) => {
  return (
    <div className="post">
      <div className="post_header">
        <div className="post_headerAuthor">
          <Avatar>
            {user.charAt(0).toUpperCase()}
          </Avatar>
          {user} · <span>{time}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post_image">
        <img src={image} alt="" />
      </div>
      <div className="post_footer">
        <div className="post_Icons">
          <FavoriteBorderIcon />

          <ChatBubbleOutlineIcon />
          <TelegramIcon />
        </div>
        <div className="post_save">
          <BookmarkBorderIcon />
        </div>
      </div>
      Liked by {like} people.
    </div>
  );
};

export default Post;
