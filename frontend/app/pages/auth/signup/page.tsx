import Link from "next/link";

function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 text-white">
      <div className="w-full max-w-md rounded-xl bg-gray-800 p-8 shadow-lg">
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

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 outline-none transition focus:border-amber-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 outline-none transition focus:border-amber-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 outline-none transition focus:border-amber-500"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 outline-none transition focus:border-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-amber-600 py-3 font-semibold transition hover:bg-amber-700"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="../auth/signin"
            className="font-medium text-amber-400 hover:text-amber-300"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
