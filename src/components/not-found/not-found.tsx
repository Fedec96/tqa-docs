import Link from "next/link";

export const NotFound = () => {
  return (
    <section className="flex h-dvh">
      <div className="m-auto">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 font-bold lg:text-9xl">Oh boy.</h1>
          <p className="mb-4 text-4xl">We looked everywhere.</p>

          <p className="mb-8 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.
          </p>

          <Link
            href="/"
            className="text-black dark:text-white font-medium text-sm"
          >
            Return to a safe place
          </Link>
        </div>
      </div>
    </section>
  );
};
