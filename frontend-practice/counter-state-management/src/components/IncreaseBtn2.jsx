import { Button } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { counterState } from "./Counter2";
import { randomColor } from "../common/randomColor";

const IncreaseBtn2 = () => {
  const setCounter = useSetRecoilState(counterState);
  const color = randomColor();
  return (
    <div>
      <div>
        <Button
          variant={"contained"}
          style={{ background: color, color: "black" }}
          onClick={() => {
            setCounter((existingState) => existingState + 1);
          }}
        >
          Increase
        </Button>
      </div>
    </div>
  );
};

export default IncreaseBtn2;
