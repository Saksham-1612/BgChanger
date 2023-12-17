import { useState } from "react";
import BottomBar from "./BottomBar";

function App() {
  const [color, setColor] = useState("blue");
  return (
    <div style={{ background: color }} className="w-full h-screen  text-white">
      <BottomBar setColor={setColor} />
    </div>
  );
}

export default App;
