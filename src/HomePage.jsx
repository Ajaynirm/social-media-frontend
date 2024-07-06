import React from 'react'
import Sidenav from './navigation/Sidenav';
import Timeline from './timeline/Timeline';
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="homepage">
        <div className="homepage_nav">
            <Sidenav />
        </div>
        <div className="homepage_timeline">
            <Timeline />
        </div>
    </div>
  )
}

export default HomePage