import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  useEffect(() => {
    gsap.timeline(
      gsap.defaults({ ease: "slow" }),
      gsap.from(".aboutHeader", { y: -10, opacity: 0, stagger: 0.5 }),
      gsap.from(".aboutMain", { y: -10, delay: 0.8, opacity: 0, stagger: 0.5 }),
      gsap.from("hr", { delay: 0.5, duration: 2, scale: 0, opacity: 0 }),
      gsap.from(".aboutList", { y: 10, delay: 1.8, opacity: 0, stagger: 0.15 })
    );
  }, []);
  return (
    <div>
      <title>Neal Fisher</title>
      <div className="aboutHeader">
        <h1>About Me</h1>
        <hr />
      </div>
      <div>
        <p className="aboutMain">
          My name is Neal Fisher - I was born and raised in the Midwest,
          currently based in Memphis, TN. I'm a self-taught programmer currently
          mostly working in Javascript and HTML/CSS - though that will change as
          time goes on because I'm also very interested in learning C# and C++ -
          my ultimate goal is to learn how to use Unreal and Unity.
        </p>
        <p className="aboutMain">
          My interests are mainly artistic and entertainment centered, but
          really when it comes down to it - I just like learning new things in
          general, whether or not they're obviously connected to art. Learning
          to code hasn't been easy by any stretch, but it <i>has</i> been
          rewarding.
        </p>
      </div>
      <div className="aboutList">
        <p>A few of my other interests include--</p>
        <ul>
          <li className="aboutList">Graphic Design</li>
          <li className="aboutList">Game Design</li>
          <li className="aboutList">Writing</li>
          <li className="aboutList">Music</li>
          <li className="aboutList">Acting</li>
          <li className="aboutList">Linguistics</li>
        </ul>
      </div>
      <div className="aboutMain">
        <p>
          This site is a demonstration of my skills in HTML, CSS and Javascript
          and a showcase of a few projects.
        </p>
      </div>
    </div>
  );
};

export default About;
