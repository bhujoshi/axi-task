import { useState } from "react";
import "./App.css";

const App = () => {
  const [lastClicked, setLastClicked] = useState<Date | undefined>(undefined);
  const [buttonColor, setButtonColor] = useState("red");

  const onClick = () => {
    setLastClicked(new Date());
    setButtonColor(getNextButtonColor(buttonColor));
  };

  const getNextButtonColor = (color: string) => {
    switch (color) {
      case "red":
        return "blue";
      case "blue":
        return "green";
      case "green":
        return "red";
      default:
        throw new Error("Invalid color");
    }
  };

  return (
    <>
      <div>
        <button onClick={onClick} style={{ backgroundColor: buttonColor }}>
          Click
        </button>
      </div>
      <div className="TimeContainer">
        <div className="TimeItem">
          Local time: {lastClicked !== undefined ? lastClicked.toString() : "Never"}
        </div>
        <div className="TimeItem">
          GMT Time: {lastClicked !== undefined ? lastClicked.toString() : "Never"}
        </div>
        <div className="TimeItem">
          ACT Time: {lastClicked !== undefined ? lastClicked.toString() : "Never"}
        </div>
      </div>
    </>
  );
};

export default App;