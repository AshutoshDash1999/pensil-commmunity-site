import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Navbar/Nav";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App static">
      <Nav />
      <div className="absolute top-16 left-0 flex border-2 border-purple-900 w-full">
        <Sidebar />
        <div className="main-content-container relative top-4 mx-8 w-full border-2 border-red-900">
          <Hero/>
        </div>
      </div>
    </div>
  );
}

export default App;
