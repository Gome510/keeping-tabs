import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-channels">
        <li>Channel one</li>
        <li>Channel Two</li>
        <li>Channel Three</li>
      </ul>
      <div className="add-channel">
        <img src="../../public/images/plus.svg" />
      </div>
    </div>
  );
}

export default Sidebar;
