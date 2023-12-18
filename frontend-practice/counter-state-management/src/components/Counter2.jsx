import DecreaseBtn2 from "./DecreaseBtn2";
import IncreaseBtn2 from "./IncreaseBtn2";
import DisplayCounter2 from "./DisplayCounter2";
import { Card } from "@mui/material";
import { RecoilRoot, atom } from "recoil";
import { randomColor } from "../common/randomColor";

function Counter2() {
  const color = randomColor();
  return (
    <RecoilRoot>
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              height: "200px",
              alignItems: "center",
            }}
          >
            <IncreaseBtn2></IncreaseBtn2>
            <DisplayCounter2></DisplayCounter2>
            <DecreaseBtn2></DecreaseBtn2>
          </div>
        </Card>
      </div>
    </RecoilRoot>
  );
}
export const counterState = atom({
  key: "counter",
  default: 0,
});

export default Counter2;
