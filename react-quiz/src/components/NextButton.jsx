/* eslint-disable react/prop-types */

const NextButton = ({ dispatch, answer, index, numQuestion }) => {
  if (answer === null) return null;
  if (index < numQuestion - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
};
export default NextButton;
