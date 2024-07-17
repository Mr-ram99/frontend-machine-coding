"use client";

import { use, useState } from "react";
import { cars } from "@/app/lib/MOCK_DATA";

export default function SearchWithDebounce() {
  const [result, setResult] = useState<string[]>(cars);
  const [searchString, setSearchString] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
    const filteredCars = cars.filter((car) =>
      car.toLowerCase().includes(searchString)
    );
    setResult(filteredCars);
  };
  return (
    <main className="flex min-h-screen flex-col p-12 items-center">
      <h2 className="text-center text-2xl">Search with Debounce</h2>
      <div className="flex flex-col items-center m-2 p-5">
        <input type="text" onChange={handleChange} className="border m-12" />
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
