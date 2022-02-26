import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import Navbar from "./components/Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  gsap.registerPlugin(TextPlugin);

  // useEffect(() => {
  //   gsap.timeline(
  //     gsap.defaults({ scale: 0, ease: "slow" }),
  //     gsap.from(".container", { opacity: 0, stagger: 0.3 }),
  //     gsap.from(".Active", { delay: 0.5, opacity: 0 })
  //   );
  // }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="Active">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
