/* eslint-disable @typescript-eslint/no-explicit-any */
import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request: any, { params }: any) {
  const { cabinsId } = params;

  try {
    const [cabin, booked] = await Promise.all([
      getCabin(cabinsId),
      getBookedDatesByCabinId(cabinsId),
    ]);

    return Response.json({ cabin, booked });
  } catch (error: any) {
    return Response.json(
      { message: "Cabin not Found" + error.message },
      { status: 500 }
    );
  }
}
