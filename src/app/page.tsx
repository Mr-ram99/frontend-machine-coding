import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-5">
      <h2 className="text-center text-2xl font-bold">
        Frontend Machine Coding
      </h2>
      <div className="flex justify-between">
        <Link
          href="/search-with-debounce"
          className="px-3 py-2 bg-gradient-to-l from-slate-100 via-purple-100 to-pink-100"
        >
          Search with Debounce
        </Link>
        <Link
          href="/lazy-loading"
          className="px-3 py-2 bg-gradient-to-l from-slate-100 via-purple-100 to-pink-100"
        >
          Lazy Loading
        </Link>
      </div>
    </main>
  );
}
