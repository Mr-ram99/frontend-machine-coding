import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12">
      <h2 className="text-center text-2xl font-bold">
        Frontend Machine Coding
      </h2>
      <div className="flex justify-between">
        <Link
          href="/search-with-debounce"
          className="px-3 py-2 bg-gradient-to-l from-slate-100 via-purple-100 to-pink-100"
        >
          search with debounce
        </Link>
      </div>
    </main>
  );
}
