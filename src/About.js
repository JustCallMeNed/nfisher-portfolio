import React, { useEffect } from "react";
import gsap from "gsap";

const About = () => {
  useEffect(() => {
    gsap.timeline(
      gsap.defaults({ ease: "slow" }),
      gsap.from("#aboutHeader", { y: -10, opacity: 0, stagger: 0.5 }),
      gsap.from("#aboutMain", { y: -10, delay: 0.8, opacity: 0, stagger: 0.5 }),
      gsap.from("hr", { delay: 0.5, duration: 2, scale: 0, opacity: 0 }),
      gsap.from("#aboutList", { y: 10, delay: 1.8, opacity: 0, stagger: 0.15 })
    );
  }, []);
  return (
    <div className="content">
      <title>Neal Fisher</title>
      <div className="Header" id="aboutHeader">
        <h1>About Me</h1>
        <hr />
      </div>
      <div>
        <p className="Main" id="aboutMain">
          My name is Neal Fisher - I was born and raised in the Midwest,
          currently based in Memphis, TN. I'm a self-taught programmer currently
          working in Javascript and HTML/CSS - though that will change as time
          goes on because I'm also very interested in learning C# and C++ - my
          ultimate goal is to learn how to use Unreal and Unity.
        </p>
        <p className="Main" id="aboutMain">
          My interests are mainly artistic and entertainment centered, but
          really when it comes down to it - I just like learning new things in
          general, whether or not they're obviously connected to art. Learning
          to code hasn't been easy by any stretch, but it <i>has</i> been
          rewarding.
        </p>
      </div>
      <div className="List" id="aboutList">
        <p>A few of my other interests--</p>
        <ul>
          <li id="aboutList">Graphic Design</li>
          <li id="aboutList">Game Design</li>
          <li id="aboutList">Writing</li>
          <li id="aboutList">Music</li>
          <li id="aboutList">Acting</li>
          <li id="aboutList">Linguistics</li>
        </ul>
      </div>
      <div className="Main" id="aboutMain">
        <p>
          This site is a demonstration of my skills in HTML, CSS and Javascript
          and a showcase of a few projects I've worked on, alone and with
          others.
        </p>
      </div>
    </div>
  );
};

export default About;
