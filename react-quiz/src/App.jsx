/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import MainComp from "./components/MainComp";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import Finished from "./components/Finished";
import RestartGame from "./components/RestartGame";
import Timer from "./components/Timer";

const initialState = {
  questions: [],
  // loading,  error , ready , active , finished
  status: " loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const SECS_PER_QUESTION = 10;

const reducer = (state, action) => {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer": {
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const App = () => {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const maxPoints = questions?.reduce((prev, curr) => prev + curr.points, 0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:3001/questions");
        const data = await response.json();
        dispatch({ type: "dataRecieved", payload: data });
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
        {status === "ready" && questions && questions.length > 0 && (
          <StartScreen length={questions?.length} dispatch={dispatch} />
        )}
        {status === "active" && questions && questions.length > 0 && (
          <>
            <Progress
              index={index}
              numQuestion={questions.length}
              points={points}
              totalPoints={maxPoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
              totalPoints={questions.reduce(
                (acc, question) => acc + question.points,
                0
              )}
            />
            <footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />{" "}
              <NextButton
                dispatch={dispatch}
                numQuestion={questions.length}
                answer={answer}
                index={index}
              />
            </footer>
          </>
        )}

        {status === "finished" && (
          <>
            <Finished
              points={points}
              maxPoints={maxPoints}
              highscore={highscore}
            />

            <RestartGame dispatch={dispatch} />
          </>
        )}
      </MainComp>
    </div>
  );
};
export default App;


//! Task to Add:
// - Add high score to api
// - Add back button so user can change answer
// - User Choose difficulty level
// - User Number of questions
