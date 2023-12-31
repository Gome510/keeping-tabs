import React, { useEffect, useRef, useState }  from "react";
import Message from "./Message"
import { useParams } from "react-router-dom"

import messageData from "../../../assets/message-data.json";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { firestore } from "../../../firebase_setup/firebase";

export default function Messages(){
    const [messages, setMessages] = useState([])

    const { channelId } = useParams()

    useEffect(() => {
        const req = query(
            collection(firestore, channelId), //update with actual channel variable
            orderBy("time","asc")
        )

        const observer = onSnapshot(req, (querySnapshot) => {
            const new_messages = []
            querySnapshot.forEach(document => {
                const data = document.data()
                new_messages.push({
                    id: document.id,
                    text: data.text,
                    user_id: data.user_id,
                    user_name: data.user_name,
                    pfp: data.pfp,
                    time: data.time
                })
            })
            setMessages(new_messages)
        }, err => {
            console.log(`Encountered error: ${err}`)
        })

    }, [channelId])

    const styles = {
        backgroundColor: "grey",
        border: "1px solid black"
    }
    
    const messageArray = messages.map((message) => {
        return(
            <Message 
                id={message.id}
                key={message.id}
                text={message.text}
                time={message.time}
                pfp={message.pfp}
                userName={message.user_name}
                userId={message.user_id}
            />
        )
    });

    return(
        <>
        <div className="messages">
            {messageArray}
        </div>
        </>
        
    );
}