import { Button } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { counterState } from "./Counter2";
import { randomColor } from "../common/randomColor";

const DecreaseBtn2 = () => {
  const setCounter = useSetRecoilState(counterState);
  const color = randomColor();
  return (
    <div>
      <div>
        <Button
          variant={"contained"}
          style={{ background: color, color: "black" }}
          onClick={() => {
            setCounter((existingCounter) => existingCounter - 1);
          }}
        >
          Decrease
        </Button>
      </div>
    </div>
  );
};
export default DecreaseBtn2;
