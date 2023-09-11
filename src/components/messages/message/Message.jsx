import React from "react";
import "./Message.css"
import { auth, firestore } from "../../firebase_setup/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useParams } from "react-router";

export default function Message (props) {
    const circleStyle={
        borderRadius:"50%",
        backgroundColor:"white",
        width:"60px",
        height:"60px"
    }

    const { channelId } = useParams()

    async function handleDelete() {
      await deleteDoc(doc(firestore, channelId, props.id)); //update when multiple channels
    }

    const formattedTimestamp = props.time?  props.time.toDate().toLocaleString() : "undefined";
    //Sets user picture to white circle if pfp property is an empty string.
    const userPic = props.pfp ? <img src={props.pfp}/> : <div style={circleStyle}></div> 

    return(
       <div id="message-container">
          <div id='userProfPic'>{userPic}</div>
          <div id="message-center">
          <div id='userName'><h3>{props.userName}</h3> </div> 
         <div id='timeStamp'>{formattedTimestamp}</div>
         {(auth.currentUser != null && auth.currentUser.uid === props.userId) ? <div id='deleteButton' > <button onClick={handleDelete} > {'\u274C'} </button></div>: <> </>}
         <div id='messageText'> <p> {props.text} </p></div>
          </div>
       </div>
    )
 }