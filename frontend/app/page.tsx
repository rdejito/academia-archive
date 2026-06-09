"use client";
import Image from "next/image";
import Link from "next/link";

function LandingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <main className="relative z-10 flex h-screen flex-col justify-between p-8">
        {/* Top */}
        <Link href="/signin">
          <div className="flex justify-end">
            <button className="rounded-lg bg-white px-6 py-2 font-medium text-black hover:bg-gray-200">
              Sign In
            </button>
          </div>
        </Link>

        {/* Center */}
        <div className="mx-auto max-w-4xl text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            ACADEMIA ARCHIVE
          </h1>

          <p className="text-lg text-gray-200">
            &quot;For a true reader, a book is not a leisure activity; it is a
            nutritional necessity. The mind starves when the pages stop
            turning.&quot;
          </p>
        </div>

        {/* Bottom */}
        <div className="flex justify-left">
          <Image
            src="/logo.png"
            alt="Library Logo"
            width={100}
            height={100}
            className="h-24 w-24 object-contain"
          />
        </div>
      </main>
    </div>
  );

  {
    /** AM WRITING SOMETHING... */
  }
}

export default LandingPage;
