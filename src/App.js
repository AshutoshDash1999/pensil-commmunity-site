import React from "react";
import "./App.css";
import CommunitySuggestions from "./Components/CommunitySuggestions/CommunitySuggestions";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import HighlightedTopics from "./Components/HighlightedTopics/HighlightedTopics";
import Nav from "./Components/Navbar/Nav";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App static">
      <Nav />
      <div className="absolute top-20 left-0 flex w-full">
        <Sidebar />
        <div className="main-content-container relative top-4 left-60 mx-8 overflow-y-auto w-4/5">
          <Hero/>
          <HighlightedTopics/>
          <CommunitySuggestions/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
