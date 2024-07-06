import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Post = () => {
  return <div className="post">
    <div className="post_header">
        <div className="post_headerAuthor">
            <Avatar><img src="./img3.png" alt="" /></Avatar> Ajay · <span>29 min</span>
        </div>
        <MoreHorizIcon />
       
    </div>
    <div className="post_image">
        <img src="./playstore.png" alt="" />
    </div>
    <div className="post_footer">
        <div className="post_footerIcons">
            <div className="post_footerIconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
            </div>
            <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by 29 people.
    </div>

  </div>;
};

export default Post;
