import dynamic from "next/dynamic";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });

  if (!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100ch - 200px)"
          projectId="c5dcd0fa-5d2d-4c00-be1b-97353928ffec"
          userName={username}
          userSecret={secret}
        />
      </div>
    </div>
  );
}
