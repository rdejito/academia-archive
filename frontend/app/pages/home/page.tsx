function HomePage() {
  return (
    <main className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Welcome to Academia Archive
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
          Organize, preserve, and access academic resources in one centralized
          platform.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-lg bg-amber-600 px-6 py-3 font-medium transition hover:bg-amber-700">
            Get Started
          </button>

          <button className="rounded-lg border border-gray-600 px-6 py-3 font-medium transition hover:border-amber-400 hover:bg-gray-900">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">Features</h2>

        <div className="grid gap-8 md:grid-cols-3">
          <article className="rounded-2xl border border-gray-800 bg-gray-900 p-8 transition hover:border-amber-500">
            <h3 className="mb-3 text-xl font-semibold">Academic Repository</h3>
            <p className="text-gray-400">
              Store and manage research papers, notes, and educational materials
              securely.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-800 bg-gray-900 p-8 transition hover:border-amber-500">
            <h3 className="mb-3 text-xl font-semibold">Easy Collaboration</h3>
            <p className="text-gray-400">
              Share resources and work together with students and educators.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-800 bg-gray-900 p-8 transition hover:border-amber-500">
            <h3 className="mb-3 text-xl font-semibold">Quick Search</h3>
            <p className="text-gray-400">
              Find academic materials instantly with powerful search tools.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
