import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <>
      <div className="flex justify-between items-center border border-primary-800 min-h-[400px] ">
        <DateSelector />
        <ReservationForm />
      </div>
    </>
  );
};
export default Reservation;
