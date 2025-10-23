import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage, setMessage } from "./messageSlice";

export default function Message() {
  const message = useSelector((state) => state.message.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Typography>{message}</Typography>
      <Button onClick={() => dispatch(setMessage("Hello from Redux Toolkit"))}>
        Set Message
      </Button>
      <Button onClick={() => dispatch(clearMessage())}>Clear</Button>
    </div>
  );
}
