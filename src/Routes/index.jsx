import { Outlet } from "react-router";
import Sidebar from "../components/sidebar";

import classes from "./root.module.css"


export default function Root() {
  return (
    <div className={classes["grid"]}>
        <div className={classes["grid-column"]}>
          <Sidebar className={classes.sidebar} />
        </div>
        
        <div className={classes["grid-column"]}>
            <Outlet/>
        </div>
    </div>
  )
}