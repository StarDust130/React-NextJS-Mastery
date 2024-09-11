import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import MainComp from "./components/MainComp";

const initialState = {
  questions: [],

  // loading,  error , ready , active , finished
  status: " loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, questions: action.data, status: "ready" };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:3001/questions");
        const data = await response.json();
        dispatch({ type: "dataRecieved", data });
      } catch (error) {
        console.error("Error fetching questions: ", error);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <MainComp>
        <h1>React Quiz</h1>
        <p>
          This is a quiz to test your knowledge of React. It is a multiple
          choice quiz with 10 questions. Each question has 4 possible answers,
          but only one of them is correct. You can choose only one answer per
          question. At the end of the quiz, you will see your score.
        </p>
      </MainComp>
    </div>
  );
};
export default App;
