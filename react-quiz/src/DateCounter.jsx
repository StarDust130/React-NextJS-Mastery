import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.value };
    case "reset":
      return { count: 0 };
    case "setStep":
      return { ...state, step: action.value };
    default:
      return state;
  }
}

export function DateCounter() {
  const intitialState = { count: 0, step: 1 };

  const [state, dispatch] = useReducer(reducer, intitialState);

  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    dispatch({ type: "decrement", value: step });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    dispatch({ type: "increment", value: step });
  };

  const defineCount = function (e) {
    dispatch({ type: "setStep", value: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", value: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
