import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import LangSelect from "./components/LangSelect";
import Navbar from "./components/Navbar";
import About from "./About";
import AboutFr from "./AboutFr";
import AboutFi from "./AboutFi";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  gsap.registerPlugin(TextPlugin);

  const [lang, setLang] = useState("");
  // useEffect(() => {
  //   gsap.timeline(
  //     gsap.defaults({ scale: 0, ease: "slow" }),
  //     gsap.from(".container", { opacity: 0 }),
  //     gsap.from(".Active", { delay: 0.5, opacity: 0 })
  //   );
  // }, []);
  console.log(lang);
  const aboutRenderer = (lang) => {
    let element = null;
    switch (lang) {
      case "eng":
        element = <About />;
        break;
      case "fra":
        element = <AboutFr />;
        break;
      case "suo":
        element = <AboutFi />;
        break;
      default:
        element = <About />;
    }
    return element;
  };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <LangSelect lang={lang} setLang={setLang} />
        <div className="Active">
          <Routes>
            <Route path="/" element={aboutRenderer(lang)} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
