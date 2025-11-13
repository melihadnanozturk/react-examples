"use client"; // 👈 Bu satır olmazsa component SSR olur!

import { useState, useEffect } from "react";

export default function ClientRendered() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <div
      style={{
        padding: "10px",
        border: "2px solid blue",
        borderRadius: 10,
        marginTop: 20,
      }}
    >
      <h3>⚡ Client-Side Component</h3>
      <p>Rendered on client at: {time}</p>
      <button onClick={() => setTime(new Date().toLocaleTimeString())}>
        Update Time
      </button>
      <p>
        Bu içerik önce boş gelir, sonra <b>tarayıcıda</b> JavaScript ile render
        edilir.
      </p>
    </div>
  );
}
