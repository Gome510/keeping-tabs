import React, { useContext } from "react";
import classes from "./sidebar.module.css";
import { Link } from "react-router-dom";
import Profile from "../UI/userProfile";

function Sidebar() {

  return (
    <div className={classes["sidebar"]}>
      <ul className={classes["sidebar-channels"]}>
      <li>
          <Link className={classes["link-styles"]} to="messages/channel1"> {/* TODO link channels here, when ready*/}
            Channel one
          </Link>
        </li>
        <li>
          <Link className={classes["link-styles"]} to="/messages/channel2">
            Channel Two
          </Link>
        </li>
        <li>
        <Link className={classes["link-styles"]} to="/messages/channel3">
            Channel Three
          </Link>
        </li>
      </ul>
      <Profile />
      <div className={classes["add-channel"]}>
        <img src="../../public/images/plus.svg" />
      </div>
      
    </div>
  );
}

export default Sidebar;
