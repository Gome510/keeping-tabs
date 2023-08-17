import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-channels">
      <li>
          <Link className="link-styles" to="/test1"> {/* TODO link channels here, when ready*/}
            Channel one
          </Link>
        </li>
        <li>
          <Link className="link-styles" to="/test2">
            Channel Two
          </Link>
        </li>
        <li>
        <Link className="link-styles" to="/test3">
            Channel Three
          </Link>
        </li>
      </ul>
      <div className="add-channel">
        <img src="../../public/images/plus.svg" />
      </div>
    </div>
  );
}

export default Sidebar;
