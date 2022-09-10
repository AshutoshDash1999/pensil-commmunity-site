import React, { useState } from "react";
import CommunityCard from "./CommunityCard";

let communityData = [
  { 
    id:1,
    name: "JavaScript Community",
    members: 1232,
    banner: "./community-imgs/js.jpg",
  },
  {
    id:2,
    name: "Python Community",
    members: 1232,
    banner: "./community-imgs/python.jpg",
  },
  {
    id:3,
    name: "Java Community",
    members: 1232,
    banner: "./community-imgs/java.jpg",
  },
  {
    id:4,
    name: "App Dev Community",
    members: 1232,
    banner: "./community-imgs/android.jpg",
  },
  {
    id:5,
    name: "Data Science Community",
    members: 1232,
    banner: "./community-imgs/ds.jpg",
  },
];

function CommunitySuggestions() {

  return (
    <section className="my-8 py-2 grid grid-cols-3 gap-4">
      {communityData.map((item) => (
        <div key={item.id} layoutId={item.id}>
          <CommunityCard
            communityName={item.name}
            communityBanner={item.banner}
            communityUsers={item.members}
          />
        </div>
      ))}
    </section>
  );
}

export default CommunitySuggestions;
