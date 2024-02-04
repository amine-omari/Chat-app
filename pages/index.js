import React, { useContext } from "react";

import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter();

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  function onSubmit(e) {
    e.preventDefault();

    if (username.lenght === 0 || secret.lenght === 0) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        {
          headers: {
            "private-key": apiKey,
          },
        }
      )
      .then((r) => router.push("/chats"));
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">Nextjs Chat</div>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
