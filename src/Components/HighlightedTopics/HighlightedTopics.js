import React from "react";
import Marquee from "react-fast-marquee";
import "./HighlightedTopics.css"

function HighlightedTopics() {
  return (
    <section className="my-8">
      <Marquee pauseOnHover={true}	>
        <div className="topic1 p-12 mx-2 rounded-full"></div>
        <div className="topic2 p-12 mx-2 rounded-full"></div>
        <div className="topic3 p-12 mx-2 rounded-full"></div>
        <div className="topic4 p-12 mx-2 rounded-full"></div>
        <div className="topic5 p-12 mx-2 rounded-full"></div>
        <div className="topic6 p-12 mx-2 rounded-full"></div>
        <div className="topic7 p-12 mx-2 rounded-full"></div>
        <div className="topic8 p-12 mx-2 rounded-full"></div>
        <div className="topic9 p-12 mx-2 rounded-full"></div>
        <div className="topic10 p-12 mx-2 rounded-full"></div>
        <div className="topic5 p-12 mx-2 rounded-full"></div>
      </Marquee>
    </section>
  );
}


export default HighlightedTopics;
