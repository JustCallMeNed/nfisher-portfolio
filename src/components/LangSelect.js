import React, { useEffect } from "react";
import gsap from "gsap";
// import { useState } from "react/cjs/react.production.min";

function LangSelect() {
  // useState(() => {
  //     const
  // })
  useEffect(() => {
    gsap.timeline(
      gsap.defaults({ ease: "slow" }),
      gsap.from(".LangSelect", { duration: 2, opacity: 0 }),
      gsap.from(".langHeader", { duration: 1, x: 100, opacity: 0 }),
      gsap.from(".LangList", { y: -10, delay: 1, opacity: 0 }),
      gsap.from(".LangBtn", { y: -10, delay: 1, opacity: 0, stagger: 0.15 })
    );
  }, []);
  return (
    <div>
      <div className="container">
        <div className="LangSelect">
          <div className="langHeader">
            <h3>Language</h3>
          </div>
          <div className="LangList">
            {/* <Link to="/"> */}
            <button className="LangBtn">
              <h2>ENG</h2>
            </button>
            {/* </Link> */}
            {/* <Link to="/portfolio"> */}
            <button className="LangBtn">
              <h2>FRA</h2>
            </button>
            {/* </Link> */}
            {/* <Link to="/contact"> */}
            <button className="LangBtn">
              <h2>SUO</h2>
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LangSelect;
