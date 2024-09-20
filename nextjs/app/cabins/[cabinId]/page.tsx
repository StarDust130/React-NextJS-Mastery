/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCabin } from "@/app/_lib/data-service";

import Link from "next/link";
import Reservation from "@/app/_components/Reservation";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";

export const generateMetadata = async ({ params }: any) => {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
};

// export const generateStaticParams = async () => {
//   const cabins = await getCabins();
//   return cabins.map((cabin: any) => ({ params: { cabinId: cabin.id } }));
// };

const page = async ({ params }: any) => {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto ">
      <Link
        href={"/cabins"}
        className="w-full flex justify-start mb-6 hover:text-primary-400 cursor-pointer"
      >
        {" "}
        &larr; Back
      </Link>

      <Cabin cabin={cabin} />

      <div>
        <h2
          className="text-5xl font-semibold text-center 
        text-accent-400 mb-5"
        >
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
