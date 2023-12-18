import Counter1 from "./Counter1";
import { InfoCard } from "./InfoCard";
export const ContextApp = () => {
  const data = {
    title: "Context State Management",
    desc: `Context provides a way to pass data through the component tree
    without having to pass props down manually at every level.`,
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <InfoCard data={data}></InfoCard>
      <Counter1></Counter1>
    </div>
  );
};
