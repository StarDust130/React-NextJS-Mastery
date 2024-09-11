/* eslint-disable react/prop-types */

const Progress = ({ index, numQuestion, points, totalPoints, answer }) => {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>

      <p>
        {points} /{totalPoints} points
      </p>
    </header>
  );
};
export default Progress;
