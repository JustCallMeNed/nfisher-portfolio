import React, { useRef } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="Nav">
          <h3>Neal Fisher</h3>
          <div className="NavList">
            <Link to="/">
              <button>
                <h2 className="NavBtn">Home</h2>
              </button>
            </Link>
            <Link to="/portfolio">
              <button>
                <h2 className="NavBtn">Projects</h2>
              </button>
            </Link>
            <Link to="/contact">
              <button>
                <h2 className="NavBtn">Contact</h2>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
