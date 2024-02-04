import React, { useContext } from "react";

import { Context } from "../context";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-title">Nextjs Chat</div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
