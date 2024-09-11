import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import MainComp from "./components/MainComp";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

const initialState = {
  questions: [],

  // loading,  error , ready , active , finished
  status: " loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, questions: action.data, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const App = () => {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:3001/questions");
        const data = await response.json();
        dispatch({ type: "dataRecieved", data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <MainComp>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen length={questions.length} dispatch={dispatch} />
        )}
        {status === "active" && <Question />}
      </MainComp>
    </div>
  );
};
export default App;
