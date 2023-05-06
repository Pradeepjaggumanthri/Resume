import React, { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Headersection = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className="headersection">
      <div className="profileimage">
        <NavLink to="/">
          <span>My Self Resume</span>
        </NavLink>
      </div>
      <button onClick={() => setToggle(!toggle)}>
        <FaAlignLeft />
      </button>
      {toggle  ? (  <div className="menusection">
       <ul>
          <li>
            <NavLink exact={true} activeClassName="selected" to="/">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName="selected" to="/education">
              Education
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName="selected" to="/experience">
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName="selected" to="/summary">
              Summary
            </NavLink>
          </li>
          <li>
            <NavLink
              exact={true}
              activeClassName="selected"
              to="/technicalskill"
            >
              Technical Skill
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName="selected" to="/mywebsite">
              My Website
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName="selected" to="/hobbies">
              My Hobbies
            </NavLink>
          </li>
          <li>
            <NavLink
              exact={true}
              activeClassName="selected"
              to="/personaldetail"
            >
              Personal Detail
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName="selected" to="/contactus">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>):(<div className="menusection mobile">
       <ul>
          <li>
            <NavLink exact={true} activeClassName="selected" to="/">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName="selected" to="/education">
              Education
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName="selected" to="/experience">
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName="selected" to="/summary">
              Summary
            </NavLink>
          </li>
          <li>
            <NavLink
              exact={true}
              activeClassName="selected"
              to="/technicalskill"
            >
              Technical Skill
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName="selected" to="/mywebsite">
              My Website
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName="selected" to="/hobbies">
              My Hobbies
            </NavLink>
          </li>
          <li>
            <NavLink
              exact={true}
              activeClassName="selected"
              to="/personaldetail"
            >
              Personal Detail
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName="selected" to="/contactus">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>)}
    </div>
  );
};

export default Headersection;
