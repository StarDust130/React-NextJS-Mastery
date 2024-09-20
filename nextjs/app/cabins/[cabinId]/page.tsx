/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCabin } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import TextExpander from "@/app/_components/TextExpander";
import Reservation from "@/app/_components/Reservation";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

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

  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto ">
      <Link
        href={"/cabins"}
        className="w-full flex justify-start mb-6 hover:text-primary-400 cursor-pointer"
      >
        {" "}
        &larr; Back
      </Link>
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image
            fill
            src={image}
            className="object-cover"
            alt={`Cabin ${name}`}
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

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
