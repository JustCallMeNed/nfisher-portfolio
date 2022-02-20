import React, { useRef } from "react";
const Portfolio = () => {
  return (
    <div>
      <h1>Projects</h1>
      <hr />
      <h2>
        <a href="https://tictalktoe.herokuapp.com/">Tic-Talk-Toe</a>
      </h2>
      <h4>A chat/gaming app built with React, Socket.io and GSAP</h4>
      <h2>
        <a href="https://github.com/JustCallMeNed/ReactPokedex">
          React Pokedex
        </a>
      </h2>
      <h4>
        A pokedex app built with React, Axios and Webpack; as well as a LOT of
        CSS.
      </h4>
    </div>
  );
};

export default Portfolio;
