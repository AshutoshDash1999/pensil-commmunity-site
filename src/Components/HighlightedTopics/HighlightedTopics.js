import React from "react";
import Marquee from "react-fast-marquee";
import "./HighlightedTopics.css";
import { Tooltip } from "@material-tailwind/react";

function HighlightedTopics() {
  return (
    <section className="my-8">
      <Marquee pauseOnHover={true}>
        <Tooltip content="Apple Fan's Community">
          <div className="p-4 mx-2 rounded-full">
            <img src="./highlighted-icons/Apple_Logo.png" alt="" />
          </div>
        </Tooltip>
        <Tooltip content="Coder's Community" placement="bottom">
          <div className="p-4 mx-2 rounded-full">
            <img src="./highlighted-icons/Code_File.png" alt="" />
          </div>
        </Tooltip>
        <Tooltip content="Design Community">
          <div className="p-4 mx-2 rounded-full">
            <img src="./highlighted-icons/Dribbble.png" alt="" />
          </div>
        </Tooltip>
        <Tooltip content="Battle Royal Community" placement="bottom">
          <div className="p-4 mx-2 rounded-full">
            <img src="./highlighted-icons/Free_Fire.png" alt="" />
          </div>
        </Tooltip>
        <Tooltip content="Gaming Community">
          <div className="p-4 mx-2 rounded-full">
            <img src="./highlighted-icons/Game_Controller.png" alt="" />
          </div>
        </Tooltip>
        <Tooltip content="GitHub Community" placement="bottom">
          <div className="p-4 mx-2 rounded-full">
            <img src="./highlighted-icons/GitHub.png" alt="" />
          </div>
        </Tooltip>
        <Tooltip content="Music Lovers">
          <div className="p-4 mx-2 rounded-full">
            <img src="./highlighted-icons/Music.png" alt="" />
          </div>
        </Tooltip>
        <Tooltip content="React Community" placement="bottom">
          <div className="p-4 mx-2 rounded-full">
            <img src="./highlighted-icons/React_Native.png" alt="" />
          </div>
        </Tooltip>
        <Tooltip content="Swift Community">
          <div className="p-4 mx-2 rounded-full">
            <img src="./highlighted-icons/Swift.png" alt="" />
          </div>
        </Tooltip>
        <Tooltip content="Dating Community" placement="bottom">
          <div className="p-4 mx-2 rounded-full">
            <img src="./highlighted-icons/Tinder.png" alt="" />
          </div>
        </Tooltip>
        <Tooltip content="Creator's Community">
          <div className="p-4 mx-2 rounded-full">
            <img src="./highlighted-icons/Youtube.png" alt="" />
          </div>
        </Tooltip>
      </Marquee>
    </section>
  );
}

export default HighlightedTopics;
