/* eslint-disable react/prop-types */
const StartScreen = ({ length, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to the Quiz</h2>

      <h3>{length ? length : "X"} question to Test your React Mastery!</h3>

      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        Start Quiz
      </button>
    </div>
  );
};
export default StartScreen;
