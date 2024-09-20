/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams: any = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleFilter(filter: any) {
    const params = new URLSearchParams(searchParams);

    params.set("capacity", filter);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex ">
      <button
        onClick={() => handleFilter("all")}
        className={`px-5 py-2 border-primary-800 border-r-2 hover:bg-primary-800 `}
      >
        All cabins
      </button>
      <button
        onClick={() => handleFilter("small")}
        className="px-5 py-2 border-primary-800 border-r-2  hover:bg-primary-800"
      >
        1&mdash;3
      </button>
      <button
        onClick={() => handleFilter("medium")}
        className="px-5 py-2 border-primary-800 border-r-2  hover:bg-primary-800"
      >
        4&mdash;7
      </button>
      <button
        onClick={() => handleFilter("large")}
        className="px-5 py-2 hover:bg-primary-800"
      >
        8&mdash;12
      </button>
    </div>
  );
};

export default Filter;
