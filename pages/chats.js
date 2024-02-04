import dynamic from "next/dynamic";
import React, { useContext, useState } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  const { usrname, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  return <div className="background">chats</div>;
}
