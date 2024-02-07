import React from "react";
import "./navbar.css";
const NavBar = () => {
  return (
    <div className="box">
      <div className="nav-bar">
        <div className="navbar">
          <button className="button">
            <div className="overlap-group">
              <div className="sign-up">Sign Up</div>
            </div>
          </button>
          <div>
            <button className="sign-in">Sign in</button>
            <button className="home">Home</button>
            <button className="deals">Deals</button>
            <button className="newArrivals">New Arrivals</button>
            <button className="packages">Packages</button>
          </div>
        </div>
        <div className="logo">Timeless</div>
      </div>
    </div>
  );
};

export default NavBar;
