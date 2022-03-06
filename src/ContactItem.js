import React from "react";

const ContactItem = ({ linkAddress, itemName }) => {
  return (
    <h3 className="List">
      <a href={linkAddress}>{itemName}</a>
    </h3>
  );
};
export default ContactItem;
