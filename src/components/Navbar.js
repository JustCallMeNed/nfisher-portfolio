import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
const Navbar = () => {
  useEffect(() => {
    gsap.timeline(
      gsap.defaults({ ease: "slow" }),
      gsap.from(".Nav", { duration: 2, opacity: 0 }),
      gsap.from(".navHeader", { duration: 1, x: 100, opacity: 0 }),
      // gsap.to(".navSubheader", {
      //   duration: 1,
      //   text: { value: "Web Developer", delimiter: "" },
      // }),
      // gsap.to(".navSubheader", {
      //   delay: 2,
      //   duration: 1,
      //   text: { value: "Front End Developer", delimiter: "" },
      // }),
      gsap.from("hr", { duration: 2, scale: 0, opacity: 0 }),
      gsap.from(".NavList", { y: -10, delay: 1, opacity: 0 }),
      gsap.from(".NavBtn", { x: -10, delay: 1, opacity: 0, stagger: 0.15 })
    );
  }, []);
  return (
    <div>
      <div className="container">
        <div className="Nav">
          <div className="navHeader">
            <h1>Neal Fisher</h1>
            <h3 className="navSubheader">Freelance Frontend Developer</h3>
          </div>
          <div className="NavList">
            <Link to="/">
              <button className="NavBtn">
                <h2>About Me</h2>
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="NavBtn">
                <h2>Projects</h2>
              </button>
            </Link>
            <Link to="/contact">
              <button className="NavBtn">
                <h2>Contact</h2>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
