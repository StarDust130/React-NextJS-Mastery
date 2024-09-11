/* eslint-disable react/prop-types */

const Finished = ({ points, maxPoints, highscore }) => {
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥳";
  else if (percentage >= 80) emoji = "🎉";
  else if (percentage >= 60) emoji = "😊";
  else if (percentage === 0) emoji = "😿";
  else emoji = "🤔";

  return (
    <div>
      <h2>Thank you for participating in the quiz.{emoji} </h2>
      <p className="result">
        {" "}
        Your score is <strong>{points}</strong> out of{" "}
        <strong>{maxPoints}</strong> ({Math.ceil(percentage)}%){" "}
      </p>
      <p className="highscore"> (Highscore : {highscore} points)</p>
    </div>
  );
};
export default Finished;
