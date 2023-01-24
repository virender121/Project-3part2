import { Search } from "@mui/icons-material";
import React, { useState } from "react";

import "./Right.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterHashtagButton,
  TwitterFollowButton,
  TwitterVideoEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import Footer from "./Footer";


function Widgets() {




  return (
    <>
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__SearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>Whats'happening</h2>
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="saurabhnemade"
        options={{height: 400}}
      />
        <TwitterTweetEmbed tweetId={"933354946111705097"} />
        <TwitterShareButton
          url={"https://facebook.com/saurabhnemade"}
          options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
        />
        <TwitterHashtagButton tag={"cybersecurity"} />
        <TwitterFollowButton screenName={"saurabhnemade"} />
        <TwitterVideoEmbed id={"560070183650213889"} />



      </div>
      <Footer/>
    </div>
    
  
  </> 
  );
}
 export default Widgets;