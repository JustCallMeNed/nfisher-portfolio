import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const Portfolio = () => {
  useEffect(() => {
    gsap.timeline(
      gsap.defaults({ ease: "slow" }),
      gsap.from(".portHeader", { duration: 1, x: -10, opacity: 0 }),
      // gsap.from(".portBody", { duration: 1.5, opacity: 0 }),
      gsap.from("hr", { duration: 2, scale: 0, opacity: 0 }),
      gsap.from(".portList", { x: -10, delay: 1, opacity: 0, stagger: 0.15 })
    );
  }, []);
  return (
    <div className="portHeader">
      <h1>Projects</h1>
      <hr />
      <div className="portList">
        <h2>
          <a href="https://tictalktoe.herokuapp.com/">Tic-Talk-Toe</a>
        </h2>
        <h4>A chat/gaming app built with React, Socket.io and GSAP</h4>
        <div className="portList">
          <h2>
            <a href="https://github.com/JustCallMeNed/ReactPokedex">
              React Pokedex
            </a>
          </h2>
          <h4>
            A pokedex app built with React, Axios and Webpack; as well as a LOT
            of CSS.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
