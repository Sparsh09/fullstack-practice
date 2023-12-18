import { Button } from "@mui/material";
import { useContext } from "react";
import { CounterContext } from "./Counter1";
import { randomColor } from "../common/randomColor";

function IncreaseBtn() {
  const { counter, setCounter } = useContext(CounterContext);
  const color = randomColor();
  return (
    <div>
      <Button
        variant={"contained"}
        style={{ background: color, color: "black" }}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </Button>
    </div>
  );
}

export default IncreaseBtn;
