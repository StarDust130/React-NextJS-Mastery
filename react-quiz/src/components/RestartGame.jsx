/* eslint-disable react/prop-types */

const RestartGame = ({ dispatch }) => {
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>
        Restart
    </button>
  );
};
export default RestartGame;
