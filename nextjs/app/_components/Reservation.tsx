/* eslint-disable @typescript-eslint/no-explicit-any */

// import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";

import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }: any) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  //   const session = await auth();

  return (
    <div className="flex justify-between items-center border border-primary-800 min-h-[400px] ">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {/* {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )} */}

      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Reservation;
