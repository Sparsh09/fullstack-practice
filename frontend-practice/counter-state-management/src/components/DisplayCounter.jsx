import { Typography } from "@mui/material";
import { useContext } from "react";
import { CounterContext } from "./Counter1";
import { randomColor } from "../common/randomColor";
function DisplayCounter() {
  // eslint-disable-next-line no-unused-vars
  const { counter, setCounter } = useContext(CounterContext);
  const color = randomColor();

  return (
    <div>
      <Typography variant={"h3"} style={{ color: color }}>
        {counter}
      </Typography>
    </div>
  );
}

export default DisplayCounter;
