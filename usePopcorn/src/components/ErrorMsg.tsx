/* eslint-disable @typescript-eslint/no-explicit-any */

const ErrorMsg = ({ message }: any) => {
  return (
    <p className="text-red-500 h-screen text-4xl  font-bold flex justify-center items-center ">
      {message}😱
    </p>
  );
};
export default ErrorMsg;
