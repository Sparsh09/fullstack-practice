import Counter2 from "./Counter2";
import { InfoCard } from "./InfoCard";

export const RecoilApp = () => {
  const data = {
    title: "Recoil State Management",
    desc: `
    What is recoil.js and how it is managing in react?
    Recoil is an experimental state management library and It provides several capabilities that are difficult to achieve with React alone.`,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "40px",
      }}
    >
      <InfoCard data={data}></InfoCard>
      <Counter2></Counter2>
    </div>
  );
};
