import React from "react";
import {
  FaHeadphonesAlt,
  FaDesktop,
  FaNewspaper,
  FaCameraRetro,
  FaBicycle,
  FaBiking,
  FaOm,
} from "react-icons/fa";

const Hobbies = () => {
  return (
    <div className="hobbiesgrp">
      <h1>Hobbies</h1>
      <div className="hobbiesboxgrp">
        <div className="hobbiesbox">
          <span>
            <FaHeadphonesAlt />
          </span>
          <p>LISTEN MUSIC</p>
        </div>
        <div className="hobbiesbox">
          <span>
            <FaDesktop />
          </span>
          <p>Watch the tv ,movies and news</p>
        </div>
        <div className="hobbiesbox">
          <span>
            <FaNewspaper />
          </span>
          <p> Reading the newspaper</p>
        </div>
        <div className="hobbiesbox">
          <span>
            <FaCameraRetro />
          </span>
          <p> Photography</p>
        </div>
        <div className="hobbiesbox">
          <span>
            <FaBicycle />
            <FaBiking />
          </span>
          <p> Like the Riding</p>
        </div>
        <div className="hobbiesbox">
          <span>
            <FaOm />
          </span>
          <p> Like a chanting</p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
