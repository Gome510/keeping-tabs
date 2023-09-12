import React from "react";
import classes from "./message.module.css"
import { auth, firestore } from "../../../firebase_setup/firebase";
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
       <div className={classes["message-container"]}>
          <div className={classes['userProfPic']}>{userPic}</div>
          <div className={classes["message-center"]}>
          <div className={classes['userName']}><h3>{props.userName}</h3> </div> 
         <div className={classes['timeStamp']}>{formattedTimestamp}</div>
         {(auth.currentUser != null && auth.currentUser.uid === props.userId) ? <div className={classes['deleteButton']} > <button onClick={handleDelete} > {'\u274C'} </button></div>: <> </>}
         <div className={classes['messageText']}> <p> {props.text} </p></div>
          </div>
       </div>
    )
 }