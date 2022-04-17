import React from "react";
import "./App.css";

// components are defined here
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Education />
      <Projects/>
      <Experience/>
      
    </>
  );
}

export default App;
