import Image from "next/image";

const Chip = () => {
  return (
    <svg
      className="flex-shrink-0 w-5 h-5 text-yellow-400 dark:text-amber-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const dos = [
  "Environment prepping & maintenance",
  "Authentication walkthrough",
  "State management, UX & UI",
  "How to approach maps",
  "So much more!",
] as const;

const donts = [
  "Programming guides",
  "Edge cases",
  "Third parties' documentation",
] as const;

export const Features = () => {
  return (
    <section className="bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              What you&apos;ll find here...
            </h2>

            <p className="mb-8 font-light lg:text-xl">
              If there is something we love doing, besides developing web apps,
              is sharing knowledge. We&apos;re here to get you started in the
              most solid way possible.
            </p>

            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              {dos.map((item) => (
                <li key={item} className="flex space-x-3">
                  <Chip />
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Image
            className="shadow-md hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="/img/feature1.jpg"
            alt="Feature 1"
            width={1200}
            height={800}
          />
        </div>

        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <Image
            className="shadow-md hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="/img/feature2.png"
            alt="Feature 2"
            width={1200}
            height={800}
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              ...and what you won&apos;t
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              This handbook is meant to be your reference for high-level
              architecture. For everything else, remember: your coworkers (and
              your favorite search engine) are your friends!
            </p>

            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              {donts.map((item) => (
                <li key={item} className="flex space-x-3">
                  <Chip />
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
