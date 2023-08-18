import React from "react";
import Message from "./Message"
import messageData from "../../../assets/message-data.json";


export default function Messages(){
    const styles = {
        backgroundColor: "grey",
        border: "1px solid black"
    }
    
    const messageArray = messageData.map((message) => {
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