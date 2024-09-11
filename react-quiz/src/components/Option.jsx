/* eslint-disable react/prop-types */
const Option = ({ question, answer, dispatch }) => {
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })} // Wrap dispatch in an anonymous function
          className={`btn btn-option ${index === answer ? "answer" : ""}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Option;
