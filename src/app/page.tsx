import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12">
      <h2 className="text-center text-2xl">Frontend Machine Coding</h2>
      <div className="flex justify-between">
        <Link href="/search-with-debounce" className="btn btn-danger">
          search with debounce
        </Link>
      </div>
    </main>
  );
}
