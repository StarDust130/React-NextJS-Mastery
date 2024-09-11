/* eslint-disable react/prop-types */

const Finished = ({ points, maxPoints }) => {
  const percentage = (points / maxPoints) * 100;
  return (
    <div>
      <h2>Thank you for participating in the quiz.😄 </h2>
      <p className="result">
        {" "}
        Your score is <strong>{points}</strong> out of{" "}
        <strong>{maxPoints}</strong> ({Math.ceil(percentage)}%){" "}
      </p>
    </div>
  );
};
export default Finished;
