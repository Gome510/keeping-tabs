import React from "react";
import Messages from "../../MainContent/Messages/Messages";
import messageData from "../../../assets/message-data-copy.json";

export default function ChannelTwo() {
  
  const messageDataCopy = messageData.map((message) => {
    <Messages
    id={message.id}
    text={message.text}
    time={message.time}
    picture={message.pfp}
    userName={message.user_name}
  />
  })
  return (
    <div>
      {messageDataCopy}
    </div>
  );
}
