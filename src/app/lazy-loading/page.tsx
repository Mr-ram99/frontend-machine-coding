"use client";

import { useEffect, useState } from "react";

export default function LazyLoading() {
  const [users, setUsers] = useState<object[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <main className="flex flex-col p-5 items-center">
      <h2 className="text-center text-2xl">Lazy Loading</h2>
      <a
        className="text-blue-500 text-normal underline"
        href="" // add
        target="_blank"
      >
        Code
      </a>
    </main>
  );
}
