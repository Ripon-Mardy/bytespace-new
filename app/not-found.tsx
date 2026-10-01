import Link from "next/link";

import Header from "@/components/layout/Header";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#0037D9]">
      {/* Background*/}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)]
          bg-[size:64px_64px]
          md:bg-[size:96px_96px]
          lg:bg-[size:120px_120px]
        "
      />

      <div className="relative z-10">
        <Header />
      </div>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-16 text-center">
        <p
          className="
            select-none text-[clamp(8rem,30vw,28rem)] font-semibold leading-[0.8]
            bg-[linear-gradient(to_bottom,#D4FB20_35%,rgba(212,251,32,0)_100%)]
            bg-clip-text text-transparent
          "
        >
          404
        </p>

        <h1 className="-mt-6 max-w-4xl text-[72px] font-semibold leading-[1.15] tracking-[-0.01em] text-white sm:-mt-10 lg:-mt-16">
          The page you are looking for doesn’t exist
        </h1>

        <p className="mt-8 max-w-xl text-base text-[#E5E6E8] sm:text-lg">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="mt-10 rounded-full bg-[#D4FB20] px-6 py-3 text-lg font-medium text-[#040819] transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}
