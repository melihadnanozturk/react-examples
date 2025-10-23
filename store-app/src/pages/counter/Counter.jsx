import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Typography>{count}</Typography>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button onClick={() => dispatch(incrementByValue(7))}>
        Increment By Value
      </Button>
    </div>
  );
}
