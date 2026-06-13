"use client";

import Link from "next/link";

function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center text-white">
      <div className="flex w-80 flex-col gap-4 rounded-lg bg-gray-800 p-6">
        <div className="relative flex items-center justify-center">
          <Link
            href="/"
            className="absolute left-0 rounded p-1 transition hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
            >
              <path d="M0 0h16v16H0z" fill="none" />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m2.87 7.75l1.97 1.97a.75.75 0 1 1-1.06 1.06L.53 7.53L0 7l.53-.53l3.25-3.25a.75.75 0 0 1 1.06 1.06L2.87 6.25h9.88a3.25 3.25 0 0 1 0 6.5h-2a.75.75 0 0 1 0-1.5h2a1.75 1.75 0 1 0 0-3.5z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          <span className="text-2xl font-bold">Sign In</span>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name">Username</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your username..."
            className="rounded-md border border-gray-600 bg-gray-700 p-2 outline-none focus:border-amber-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password..."
            className="rounded-md border border-gray-600 bg-gray-700 p-2 outline-none focus:border-amber-500"
          />
        </div>

        <Link href="../../../pages/home">
          <button
            type="button"
            className="rounded-md bg-amber-600 py-2 font-medium hover:bg-amber-700 cursor-pointer"
          >
            Sign In
          </button>
        </Link>

        <Link
          href="../auth/forgot-password"
          className="text-center text-sm hover:text-amber-400 underline"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  );
}

export default SignInPage;
