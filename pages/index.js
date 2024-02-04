import React, { useContext } from "react";

import { Context } from "../context";

export default function Auth() {
  const { setUsername, setSecret } = useContext(Context);

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
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
