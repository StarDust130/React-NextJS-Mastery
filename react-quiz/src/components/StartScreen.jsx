const StartScreen = ({ length }) => {
  return (
    <div className="start">
      <h2>Welcome to the Quiz</h2>

      <h3>{length} question to Test your React Mastery!</h3>

      <button className="btn btn-ui">Start Quiz</button>
    </div>
  );
};
export default StartScreen;
