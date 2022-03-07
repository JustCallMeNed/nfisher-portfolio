import React, { useEffect } from "react";
import gsap from "gsap";
import ContactItem from "./ContactItem";

const Contact = () => {
  useEffect(() => {
    gsap.timeline(
      gsap.defaults({ ease: "power2" }),
      gsap.from("#contactHeader", { duration: 1.5, y: -10, opacity: 0 }),
      gsap.from("#contactMain", { y: 10, duration: 1.5, opacity: 0 }),
      gsap.from("hr", { duration: 2, scale: 0, opacity: 0 }),
      gsap.from(".contactList", { y: 10, opacity: 0, stagger: 0.15 })
    );
  }, []);
  return (
    <>
      <div className="Header" id="contactHeader">
        <h1>Contact Me</h1>
        <hr />
      </div>
      <div className="Main" id="contactMain">
        <p>Feel free to contact me by any of these methods!</p>
      </div>
      <div className="List" id="contactList">
        <ContactItem
          linkAddress="mailto:neal.c.fisher@gmail.com"
          itemName="Email"
        />
        <ContactItem
          linkAddress="https://www.linkedin.com/in/neal-fisher-97444621"
          itemName="LinkedIn"
        />
        <ContactItem
          linkAddress="https://github.com/JustCallMeNed"
          itemName="Github"
        />
      </div>
    </>
  );
};

export default Contact;
