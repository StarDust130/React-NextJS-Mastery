/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams: any = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentFilter = searchParams.get("capacity") || "all";

  const filters = [
    { label: "All cabins", value: "all" },
    { label: "1—3", value: "small" },
    { label: "4—7", value: "medium" },
    { label: "8—12", value: "large" },
  ];

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => handleFilter(filter.value)}
          className={`px-5 py-2 border-primary-800 border-r-2 hover:bg-primary-800 ${
            currentFilter === filter.value ? "bg-primary-800" : ""
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
