import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data/Data";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    console.log('navbar used');
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-header">
        <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
        <ul className="links" >
          {links.map((link) => {
            const { id, url, icon, text } = link;
            return (
              <li key={id} id={showLinks ? "" : "hidden"}>
                <Link to={url}>{icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="social-icons">
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <span key={id}>
              <a href={url}>{icon}</a>
            </span>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
