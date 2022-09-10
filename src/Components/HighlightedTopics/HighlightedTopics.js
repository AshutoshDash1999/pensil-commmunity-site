import React from "react";
import Marquee from "react-fast-marquee";
import "./HighlightedTopics.css";
import { Tooltip } from "@material-tailwind/react";
import { motion } from "framer-motion";

function HighlightedTopics() {
  return (
    <section className="my-8">
      <Marquee pauseOnHover={true}>
        <Tooltip content="Apple Fan's Community">
          <motion.div
            className="p-4 mx-2 rounded-full"
            initial={{ rotate:'-90deg', opacity: 0, scale:0 }}
            animate={{ rotate: '0deg', opacity:1, scale:1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <img src="./highlighted-icons/Apple_Logo.png" alt="" />
          </motion.div>
        </Tooltip>
        <Tooltip content="Coder's Community" placement="bottom">
          <motion.div className="p-4 mx-2 rounded-full"
           initial={{ rotate:'-90deg', opacity: 0, scale:0 }}
           animate={{ rotate: '0deg', opacity:1, scale:1 }}
           transition={{ ease: "easeOut", duration: 1.25 }}
          >
            <img src="./highlighted-icons/Code_File.png" alt="" />
          </motion.div>
        </Tooltip>
        <Tooltip content="Design Community">
          <motion.div className="p-4 mx-2 rounded-full"
           initial={{ rotate:'-90deg', opacity: 0, scale:0 }}
           animate={{ rotate: '0deg', opacity:1, scale:1 }}
           transition={{ ease: "easeOut", duration: 1.5 }}>
            <img src="./highlighted-icons/Dribbble.png" alt="" />
          </motion.div>
        </Tooltip>
        <Tooltip content="Battle Royal Community" placement="bottom">
          <motion.div className="p-4 mx-2 rounded-full"
          initial={{ rotate:'-90deg', opacity: 0, scale:0 }}
          animate={{ rotate: '0deg', opacity:1, scale:1 }}
          transition={{ ease: "easeOut", duration: 1.75 }}>
            <img src="./highlighted-icons/Free_Fire.png" alt="" />
          </motion.div>
        </Tooltip>
        <Tooltip content="Gaming Community">
          <motion.div className="p-4 mx-2 rounded-full" initial={{ rotate:'-90deg', opacity: 0, scale:0 }}
           animate={{ rotate: '0deg', opacity:1, scale:1 }}
           transition={{ ease: "easeOut", duration: 2 }}>
            <img src="./highlighted-icons/Game_Controller.png" alt="" />
          </motion.div>
        </Tooltip>
        <Tooltip content="GitHub Community" placement="bottom">
          <motion.div className="p-4 mx-2 rounded-full"
          initial={{ rotate:'-90deg', opacity: 0, scale:0 }}
          animate={{ rotate: '0deg', opacity:1, scale:1 }}
          transition={{ ease: "easeOut", duration: 2.25 }}
          >
            <img src="./highlighted-icons/GitHub.png" alt="" />
          </motion.div>
        </Tooltip>
        <Tooltip content="Music Lovers">
          <motion.div className="p-4 mx-2 rounded-full"
          initial={{ rotate:'-90deg', opacity: 0, scale:0 }}
          animate={{ rotate: '0deg', opacity:1, scale:1 }}
          transition={{ ease: "easeOut", duration: 2.5 }}
          >
            <img src="./highlighted-icons/Music.png" alt="" />
          </motion.div>
        </Tooltip>
        <Tooltip content="React Community" placement="bottom">
          <motion.div className="p-4 mx-2 rounded-full"
          initial={{ rotate:'-90deg', opacity: 0, scale:0 }}
          animate={{ rotate: '0deg', opacity:1, scale:1 }}
          transition={{ ease: "easeOut", duration: 2.75 }}
          >
            <img src="./highlighted-icons/React_Native.png" alt="" />
          </motion.div>
        </Tooltip>
        <Tooltip content="Swift Community">
          <motion.div className="p-4 mx-2 rounded-full"
          initial={{ rotate:'-90deg', opacity: 0, scale:0 }}
          animate={{ rotate: '0deg', opacity:1, scale:1 }}
          transition={{ ease: "easeOut", duration: 3 }}
          >
            <img src="./highlighted-icons/Swift.png" alt="" />
          </motion.div>
        </Tooltip>
        <Tooltip content="Dating Community" placement="bottom">
          <motion.div className="p-4 mx-2 rounded-full"
          initial={{ rotate:'-90deg', opacity: 0, scale:0 }}
          animate={{ rotate: '0deg', opacity:1, scale:1 }}
          transition={{ ease: "easeOut", duration: 3.25 }}
          >
            <img src="./highlighted-icons/Tinder.png" alt="" />
          </motion.div>
        </Tooltip>
        <Tooltip content="Creator's Community">
          <motion.div className="p-4 mx-2 rounded-full"
          initial={{ rotate:'-90deg', opacity: 0, scale:0 }}
          animate={{ rotate: '0deg', opacity:1, scale:1 }}
          transition={{ ease: "easeOut", duration: 3.5 }}>
            <img src="./highlighted-icons/Youtube.png" alt="" />
          </motion.div>
        </Tooltip>
      </Marquee>
    </section>
  );
}

export default HighlightedTopics;
