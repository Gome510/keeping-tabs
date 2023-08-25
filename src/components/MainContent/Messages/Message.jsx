import React from "react";
import "./Message.css"


export default function Message (props) {
    const circleStyle={
        borderRadius:"50%",
        backgroundColor:"white",
        width:"60px",
        height:"60px"
    }

    const formattedTimestamp = new Date(props.time).toLocaleString();
    //Sets user picture to white circle if pfp property is an empty string.
    const userPic = props.pfp ? <img src={props.pfp}/> : <div style={circleStyle}></div> 

    return(
       <div id="message-container">
          <div id='userProfPic'>{userPic}</div>
          <div id="message-center">
          <div id='userName'><h3>{props.userName}</h3> </div> 
         <div id='timeStamp'>{formattedTimestamp}</div>
         <div id='deleteButton' > <button> {'\u274C'} </button></div>
         <div id='messageText'> <p> {props.text} </p></div>
          </div>
       </div>
    )
 }