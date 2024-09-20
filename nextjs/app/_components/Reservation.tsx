/* eslint-disable @typescript-eslint/no-explicit-any */
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";

const Reservation = async ({ params }: any) => {
  const [setting, booked] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(params.cabinId),
  ]);
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
