"use client";
import { Button } from "@mui/material";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(57);

  return (
    <Button onClick={() => setCount(count + 1)}>
      Benim numaram budur = {count}
    </Button>
  );
}
