/* eslint-disable react/prop-types */
const Question = ({ question }) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option) => (
          <button key={Date.now()} className="btn btn-option">
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Question;
