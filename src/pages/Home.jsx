import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Favorite from "../components/Favorite";
import TopDeveloper from "../components/TopDeveloper";
import "./home.css";
import { FiSearch } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Footer from "../container/Footer";

const Home = () => {
  const path = window.location.pathname;


  const refresh = () => {
    window.location.reload(false);
  };

  return (
    <nav className="parent-tab">
      <div className="tab-one">
        <div className="logo">
          <h1>
            Dev<span>Hire</span>
          </h1>
        </div>
        <div className="nav-content">
          <p className={`${path === "/" && "isActive"}`} onClick={refresh}>
            <Link to="/">
              <FiSearch className="icons" size={25} />
              Home
            </Link>
          </p>
          <p
            className={`${path === "/favorites" && "isActive"}`}
            onClick={refresh}
          >
            <Link to="/favorites">
              <MdOutlineFavoriteBorder className="icons" size={25} />
              Favorites
            </Link>
          </p>
        </div>
      </div>
      <div className="tab-two">
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<TopDeveloper />} />
            <Route exact path="/favorites" element={<Favorite />} />
          </Routes>
        </div>
        <div className="tab-footer">
          <Footer />
        </div>
      </div>
    </nav>
  );
};

export default Home;
