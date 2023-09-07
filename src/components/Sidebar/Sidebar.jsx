import React, { useContext } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import SignInButton from "./SignInButton/SignInButton";

function Sidebar() {

  return (
    <div className="sidebar">
      <ul className="sidebar-channels">
      <li>
          <Link className="link-styles" to="messages/channel1"> {/* TODO link channels here, when ready*/}
            Channel one
          </Link>
        </li>
        <li>
          <Link className="link-styles" to="/messages/channel2">
            Channel Two
          </Link>
        </li>
        <li>
        <Link className="link-styles" to="/messages/channel3">
            Channel Three
          </Link>
        </li>
        <li>
          <SignInButton />
        </li>
      </ul>
      <div className="add-channel">
        <img src="../../public/images/plus.svg" />
      </div>
    </div>
  );
}

export default Sidebar;
