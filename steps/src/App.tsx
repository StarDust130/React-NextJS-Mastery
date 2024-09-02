import { X } from "lucide-react";
import "./App.css";
import Button from "./components/Button";
import Circle from "./components/Circle";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [hidden, setHidden] = useState(false);
  const steps = [
    {
      id: 1,
      title: "Learn React",
    },
    {
      id: 2,
      title: "Learn Tailwind",
    },
    {
      id: 3,
      title: "Learn TypeScript",
    },
  ];

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (steps.length > steps[0].id) {
      setStep(step - 1);
    }
  };

  if (hidden) {
    return null;
  }

  return (
    <div className="w-full h-screen flex mt-20 items-center flex-col">
      <div className="bg-gray-100 w-[80%] h-40  ">
        <div className="h-[30%] flex justify-evenly items-center">
          <Circle value="1" />
          <Circle value="2" />
          <Circle value="3" />
        </div>

        <div className="h-[40%] flex justify-evenly items-center font-bold text-xl">
          Step{steps[step - 1].id}: {steps[step - 1].title}
        </div>

        <div className="h-[30%] flex justify-around items-center">
          <Button value="Previous" onClick={handlePrevious} />
          <Button value="Next" onClick={handleNext} />
        </div>
      </div>

      <span
        className="absolute right-5 top-5 cursor-pointer font-bold"
        onClick={() => setHidden(!hidden)}
      >
        <X />
      </span>
    </div>
  );
}

export default App;

// when i click on next button, the step should change to 2 and the title should change to "Learn Tailwind"

// when i click on next button, the step should change to 3 and the title should change to "Learn TypeScript"

// when i click on next button, the step should back to one and the title should change to "Learn React"

// when i click on previous button, the step should change to 3 and the title should change to "Learn TypeScript"
