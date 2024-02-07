import React from "react";
import "./secnavbar.css";
import dropdown from "../Assets/Icons/Vector.svg";
import Search from "../Assets/Icons/Search.svg";
import profile from "../Assets/Icons/Profile.svg";
import fav from "../Assets/Icons/Fav.svg";
import store from "../Assets/Icons/Store.svg";

const SecNavBar = () => {
  return (
    <div className="box">
      <header className="header">
        <div className="text-wrapper">Timeless</div>
        <div className="nav-menu">
          <div className="div">Home</div>
          <div className="text-wrapper-2">Shop</div>
          <div className="text-wrapper-3">Products</div>
          <div className="group">
            <div className="div">Pages</div>
            <img className="vector" alt="Vector" src={dropdown} />
          </div>
          <div className="active-page" />
        </div>
        <div className="tools">
          <button>
            <img alt="Search" src={Search} />
          </button>
          <button>
            <img alt="profile" src={profile} />
          </button>
          <button>
            <img alt="fav" src={fav} />
          </button>
          <button>
            <img alt="store" src={store} />
          </button>
        </div>
      </header>
    </div>
  );
};

export default SecNavBar;
