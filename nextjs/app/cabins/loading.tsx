import SpinnerMini from "../_components/SpinnerMini";

const loading = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <SpinnerMini />
      <p className="text-xl">Loading cabin data...</p>
    </div>
  );
};
export default loading;
