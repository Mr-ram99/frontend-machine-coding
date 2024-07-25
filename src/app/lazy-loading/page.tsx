"use client";

import debounce from "lodash/debounce";
import { useEffect, useState } from "react";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const SCROLL_THRESHOLD = 20;

export default function LazyLoading() {
  const [users, setUsers] = useState<User[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/users?limit=20&skip=${pageNumber * 20}`
      );
      const data = await response.json();
      return data.users;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const handleScroll = debounce(async (e: any) => {
    const { target } = e;
    const scrollBottom =
      target.scrollHeight - (target.scrollTop + target.clientHeight);

    // scrollheight = The total height of the scrollable content.
    // scrollTop = The number of pixels the content has been scrolled vertically from the top.
    // clientHeight = The height of the visible area within the scrollable element.

    // scrollBottom  = distance from the bottom of the scrollable content to the bottom of the visible area.
    if (scrollBottom <= SCROLL_THRESHOLD) {
      try {
        const newUsers = await fetchUsers();
        setUsers((prev) => [...prev, ...newUsers]);
        setPageNumber((prev) => prev + 1);
      } catch (error) {
        console.log(error);
      }
    }
  }, 300);

  useEffect(() => {
    const initializeUsers = async () => {
      const initialUsers = await fetchUsers();
      setUsers(initialUsers);
      setPageNumber(1);
    };

    initializeUsers();
  }, []);

  return (
    <main className="flex flex-col p-5 items-center">
      <h2 className="text-center text-2xl">Lazy Loading</h2>
      <a
        className="text-blue-500 text-normal underline"
        href="https://github.com/Mr-ram99/frontend-machine-coding/blob/main/src/app/lazy-loading/page.tsx"
        target="_blank"
      >
        Code
      </a>
      <div
        className="min-w-80 max-w-100 max-h-80 text-lg flex-col items-start border-2 bg-slate-100 px-4 py-2 my-5  overflow-y-scroll"
        onScroll={handleScroll}
      >
        {users.length > 0 ? (
          users.map((user, index) => {
            return (
              <p key={index}>
                {user.id}. {user.firstName}
              </p>
            );
          })
        ) : (
          <p>No records</p>
        )}
      </div>
    </main>
  );
}
