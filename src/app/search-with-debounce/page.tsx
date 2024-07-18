"use client";

import { use, useState } from "react";
import { cars } from "@/app/lib/MOCK_DATA";

export default function SearchWithDebounce() {
  const [result, setResult] = useState<string[]>(cars);
  const [searchString, setSearchString] = useState<string>("");

  const debounce = (func: any, timeout = 500) => {
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, timeout);
    };
  };
  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredCars = cars.filter((car) =>
      car.toLowerCase().includes(e.target.value)
    );
    setSearchString(e.target.value);
    setResult(filteredCars);
  }, 500);

  return (
    <main className="flex min-h-screen flex-col p-12 items-center">
      <h2 className="text-center text-2xl">Search with Debounce</h2>
      <div className="flex flex-col items-center m-2 p-5">
        <input type="text" onChange={handleSearch} className="border m-12" />
        <div>search result for: {searchString}</div>
      </div>

      <div className="w-1/3 flex-col items-start border-2 p-5">
        {result.map((car, index) => {
          return <p key={index}>{car}</p>;
        })}
      </div>
    </main>
  );
}
