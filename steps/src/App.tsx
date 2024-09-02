import { X } from "lucide-react";
import "./App.css";
import Button from "./components/Button";
import Circle from "./components/Circle";

function App() {
  return (
    <div className="w-full h-screen flex mt-20 items-center flex-col">
      <div className="bg-gray-100 w-[80%] h-40  ">
        <div className="h-[30%] flex justify-evenly items-center">
          <Circle value="1" />
          <Circle value="2" />
          <Circle value="3" />
        </div>

        <div className="h-[40%] flex justify-evenly items-center">
          Step: 1 Learn React
        </div>

        <div className="h-[30%] flex justify-around items-center">
          <Button value="Previous" />
          <Button value="Next" />
        </div>
      </div>

      <span className="absolute right-5 top-5 cursor-pointer font-bold">
        <X />
      </span>
    </div>
  );
}

export default App;
