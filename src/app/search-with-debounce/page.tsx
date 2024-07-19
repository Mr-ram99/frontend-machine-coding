"use client";

import { useState } from "react";
import { cars } from "@/app/lib/MOCK_DATA";

export default function SearchWithDebounce() {
  const [result, setResult] = useState<string[]>(cars);
  const [timer, setTimer] = useState<number>(500);
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
  }, timer);

  return (
    <main className="flex flex-col p-5 items-center">
      <h2 className="text-center text-2xl">Search with Debounce</h2>
      <a
        className="text-blue-500 text-normal underline"
        href="https://github.com/Mr-ram99/frontend-machine-coding/blob/main/src/app/search-with-debounce/page.tsx"
        target="_blank"
      >
        Code
      </a>
      <div className="flex items-center m-2 p-5">
        <label htmlFor="searchtext">Search Text</label>
        <input
          type="text"
          id="searchtext"
          onChange={handleSearch}
          className="border m-5 bg-slate-100 p-2"
          placeholder="Search text"
        />
        <label htmlFor="timeout">Timeout (in ms)</label>
        <input
          type="number"
          id="timeout"
          onChange={(e) => setTimer(Number(e.target.value))}
          className="border m-5 bg-slate-100 p-2"
          placeholder="Timeout(in ms)"
          defaultValue={500}
        />
      </div>

      <div>Search result for: {searchString}</div>
      <div className="min-w-60 max-w-80 flex-col items-start border-2 bg-slate-100 px-4 py-2 max-h-80 overflow-x-scroll">
        {result.length > 0 ? (
          result.map((car, index) => {
            return <p key={index}>{car}</p>;
          })
        ) : (
          <p>No record found</p>
        )}
      </div>
    </main>
  );
}
