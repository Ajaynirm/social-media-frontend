import React from 'react'
import "./Sidenav.css";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import TelegramIcon from '@mui/icons-material/Telegram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';



const Sidenav = () => {
  return (
    <div className="sidenav">
      <img className='sidenav_logo' src="./logo.png" alt="instagram logo" />
      <div className="sidenav_buttons">
        <button  className="sidenav_button">
          <HomeWorkIcon />
          <span>Home</span>
        </button>
        <button className="sidenav_button">
          <SearchIcon/>
          <span>Search</span>
        </button>
        <button className="sidenav_button">
          <ExploreIcon />
          <span>Explore</span>
        </button>
        <button className="sidenav_button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        <button className="sidenav_button">
          <TelegramIcon />
          <span>Message</span>
        </button>
        <button className="sidenav_button">
          <FavoriteBorderIcon />
          <span>Notification</span>
        </button>
        <button className="sidenav_button">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
        <div className="sidenav_more">
        <button className="sidenav_button">
          <MenuIcon />
          <span>Home</span>
        </button>
        </div>
       
      </div>
    </div>
  )
}

export default Sidenav