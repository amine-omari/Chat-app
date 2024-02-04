import React, { useContext } from "react";

import { Context } from "../context";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  return (
    <div className="background">
      <div className="auth-container"></div>
    </div>
  );
}
