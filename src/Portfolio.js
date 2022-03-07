import React, { useEffect } from "react";
import gsap from "gsap";
import PortfolioItem from "./PortfolioItem";
const Portfolio = () => {
  useEffect(() => {
    gsap.timeline(
      gsap.defaults({ ease: "slow" }),
      gsap.from("#portHeader", { duration: 1, y: -10, opacity: 0 }),
      gsap.from("hr", { duration: 2, scale: 0, opacity: 0 }),
      gsap.from(".portList", { y: -10, delay: 1, opacity: 0, stagger: 0.15 })
    );
  }, []);
  return (
    <>
      <div className="Header" id="portHeader">
        <h1>Projects</h1>
        <PortfolioItem
          linkAddress="https://docs.google.com/document/d/1uF4-jW5UQZsjt7Lav6rXIztP5WeEwy5bXEx8tKP3ek4/edit?usp=sharing"
          projectName="Resume"
        />

        <hr />
        <div className="List" id="portList">
          <PortfolioItem
            linkAddress="https://tictalktoe.herokuapp.com/"
            projectName="Tic-Talk-Toe"
            projectDesc="A chat/gaming app built with React, Socket.io and GSAP"
          />
          <PortfolioItem
            linkAddress="https://api-react-dex.herokuapp.com/"
            projectName="React Pokedex"
            projectDesc="A pokedex app built with React, Axios and Webpack; as well as a LOT of CSS."
          />
          <PortfolioItem
            linkAddress="https://qscalculator.herokuapp.com/"
            projectName="QS Calculator"
            projectDesc="A quite simple calculator app built with React, Webpack; my first foray into CSS."
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
