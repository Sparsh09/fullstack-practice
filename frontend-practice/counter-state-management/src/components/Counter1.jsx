import DecreaseBtn from "./DecreaseBtn";
import IncreaseBtn from "./IncreaseBtn";
import DisplayCounter from "./DisplayCounter";
import { createContext, useState } from "react";
import { Card } from "@mui/material";
import { randomColor } from "../common/randomColor";
export const CounterContext = createContext();
function Counter1() {
  const [counter, setCounter] = useState(0);
  const color = randomColor();
  console.log(color);
  return (
    <CounterContext.Provider
      value={{ counter: counter, setCounter: setCounter }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "30%",
        }}
      >
        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: color,
            flexDirection: "column",
            height: "200px",
            width: "100%",
            transition: "0.6s all ease-in-out",
          }}
        >
          <IncreaseBtn></IncreaseBtn>
          <DisplayCounter></DisplayCounter>
          <DecreaseBtn></DecreaseBtn>
        </Card>
      </div>
    </CounterContext.Provider>
  );
}

export default Counter1;
