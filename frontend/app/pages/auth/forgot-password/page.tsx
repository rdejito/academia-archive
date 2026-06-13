"use client";

import Link from "next/link";

function ForgotPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center text-white">
      <div className="flex w-80 flex-col gap-4 rounded-lg bg-gray-800 p-6">
        {/* Header */}
        <div className="relative flex items-center justify-center">
          <h1 className="text-2xl font-bold">Forgot Password</h1>
        </div>

        {/* Description */}
        <p className="text-center text-sm text-gray-400">
          Enter your email address and we&apos;ll send you a link to reset your
          password.
        </p>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email..."
            className="rounded-md border border-gray-600 bg-gray-700 p-2 outline-none focus:border-amber-500"
          />
        </div>

        {/* Submit */}
        <button
          type="button"
          className="rounded-md bg-amber-600 py-2 font-medium transition hover:bg-amber-700 cursor-pointer"
        >
          Send Reset Link
        </button>

        {/* Back to Sign In */}
        <Link
          href="../../../pages/auth/signin"
          className="text-center text-sm hover:text-amber-400 underline"
        >
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
