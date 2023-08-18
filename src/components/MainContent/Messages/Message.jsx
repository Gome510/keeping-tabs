import React from "react";

export default function Message (props) {
    const circleStyle={
        borderRadius:"50%",
        backgroundColor:"white",
        width:"50px",
        height:"50px"
    }

    const formattedTimestamp = new Date(props.time).toLocaleString();
    //Sets user picture to white circle if pfp property is an empty string.
    const userPic = props.pfp ? <img width="50px" src={props.pfp}/> : <div style={circleStyle}></div> 

    return(
       <div id="message-container">
          {userPic}
          <h3>{props.userName}</h3>
          <p> {props.text} </p>
          <button> {'\u274C'} </button>
          {formattedTimestamp}
       </div>
    )
 }