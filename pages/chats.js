import dynamic from "next/dynamic";
import React from "react";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);


export default function Chats() {
  return <div className="background">chats</div>;
}
