import React, { useEffect, useRef, useState }  from "react";
import Message from "./Message"
import messageData from "../../../assets/message-data.json";

import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { firestore } from "../../../firebase_setup/firebase";

export default function Messages(){
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const req = query(
            collection(firestore, 'channel1'), //update with actual channel variable
            orderBy("time","desc")
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

    }, [])

    const styles = {
        backgroundColor: "grey",
        border: "1px solid black"
    }
    
    const messageArray = messages.map((message) => {
        return(
            <Message 
                id={message.id}
                text={message.text}
                time={message.time}
                picture={message.pfp}
                userName={message.user_name}
            />
        )
    });

    return(
        <div className="messages">
            {messageArray}
        </div>
    );
}