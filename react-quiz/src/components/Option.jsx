/* eslint-disable react/prop-types */
const Option = ({ question }) => {
  return (
    <div className="options">
      {question.options.map((option) => (
        <button key={Date.now()} className="btn btn-option">
          {option}
        </button>
      ))}
    </div>
  );
};
export default Option;
