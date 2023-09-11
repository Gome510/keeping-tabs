import { Outlet } from "react-router";
import classes from "./App.module.css"
import Sidebar from "../components/Sidebar/Sidebar";
import ChannelHeader from "../components/header";
import './MainContent.css'

export default function Root() {
  return (
    <div className={classes["grid"]}>
        <div className={classes["sidebar"]}> <Sidebar className={classes.sidebar} /> </div>
        <div className={classes["main-content"]}>
        <div id="mcGrid">
          <div id="channelHeaderGrid">
            <ChannelHeader />
          </div>
          <Outlet/>
        </div>
        </div>
    </div>
  )
}