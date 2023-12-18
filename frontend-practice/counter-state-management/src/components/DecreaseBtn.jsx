import { Button } from "@mui/material";
import { useContext } from "react";
import { CounterContext } from "./Counter1";
import { randomColor } from "../common/randomColor";
function DecreaseBtn() {
  const { counter, setCounter } = useContext(CounterContext);
  const color = randomColor();
  return (
    <div>
      <Button
        variant={"contained"}
        style={{ background: color, color: "black" }}
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrease
      </Button>
    </div>
  );
}

export default DecreaseBtn;
