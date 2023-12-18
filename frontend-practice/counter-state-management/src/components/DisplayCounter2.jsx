import { useRecoilValue } from "recoil";
import { counterState } from "./Counter2";
import { Typography } from "@mui/material";
import { randomColor } from "../common/randomColor";

const DisplayCounter2 = () => {
  const counter = useRecoilValue(counterState);
  const color = randomColor();

  return (
    <div>
      <Typography variant={"h3"} style={{ color: color }}>
        {counter}
      </Typography>
    </div>
  );
};

export default DisplayCounter2;
