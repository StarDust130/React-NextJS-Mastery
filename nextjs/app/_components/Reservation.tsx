/* eslint-disable @typescript-eslint/no-explicit-any */
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";

const Reservation = async ({ cabin }: any) => {
  const [setting, booked] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <>
      <div className="flex justify-between items-center border border-primary-800 min-h-[400px] ">
        <DateSelector setting={setting} booked={booked} cabin={cabin} />
        <ReservationForm />
      </div>
    </>
  );
};
export default Reservation;
