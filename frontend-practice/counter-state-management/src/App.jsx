import { Divider, Typography } from "@mui/material";
import { ContextApp } from "./components/ContextApp";
import { RecoilApp } from "./components/RecoilApp";
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        background: "lightgray",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant={"h4"} style={{ color: "darkblue" }}>
          Counter - React State Management Example
        </Typography>
        <Typography variant={"subtitle1"} style={{ color: "darkgreen" }}>
          The Color change show the re-render of that specific component.
        </Typography>
      </div>
      <ContextApp></ContextApp>

      <Divider></Divider>
      <RecoilApp></RecoilApp>
    </div>
  );
}

export default App;
