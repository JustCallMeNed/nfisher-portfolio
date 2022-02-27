import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Contact = () => {
  useEffect(() => {
    gsap.timeline(
      gsap.defaults({ ease: "power2" }),
      gsap.from(".contactHeader", { duration: 1.5, x: -10, opacity: 0 }),
      gsap.from(".contactMain", { duration: 1.5, opacity: 0 }),
      gsap.from("hr", { duration: 2, scale: 0, opacity: 0 }),
      gsap.from(".contactList", { x: 10, opacity: 0, stagger: 0.15 })
    );
  }, []);
  return (
    <div>
      <div className="Header" id="contactHeader">
        <h1>Contact Me</h1>
      </div>
      <hr />
      <div className="Main" id="contactMain">
        <p>Feel free to contact me by any of these methods!</p>
      </div>
      <div className="contactList">
        <h3 className="contactList">
          <a href="mailto:neal.c.fisher@gmail.com">Email</a>
        </h3>
        <h3 className="contactList">
          <a href="https://github.com/JustCallMeNed">Github</a>
        </h3>
        <h3 className="contactList">
          <a href="https://www.linkedin.com/in/neal-fisher-97444621">
            LinkedIn
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Contact;
