import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-2xl font-bold">Bienvenido a mi Portafolio</h1>
        <p className="text-lg">Explora más sobre mí en la página About</p>

        <Link href="/about">
          <button className="rounded-full bg-blue-600 text-white px-6 py-3 text-lg font-medium hover:bg-blue-700 transition">
            Ir a About
          </button>
        </Link>
      </main>
    </div>
  );
}
