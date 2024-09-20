/* eslint-disable @typescript-eslint/no-explicit-any */

import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

const CabinList = async ({ filter }: any) => {
  const cabins = await getCabins();

  if (!cabins) return null;

  let displayCabins: any;
  if (filter === "all") displayCabins = cabins;
  if (filter === "small")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 1);
  if (filter === "medium")
    displayCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 2 && cabin.maxCapacity <= 3
    );
  if (filter === "large")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 2);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayCabins.map((cabin: any) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};
export default CabinList;
