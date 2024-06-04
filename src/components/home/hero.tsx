import Link from "next/link";
import Image from "next/image";

import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={`bg-neutral-100 dark:bg-neutral-900 ${styles.hero}`}>
      <div className="grid max-w-screen-xl px-12 pb-8 mx-auto lg:gap-8 xl:gap-0 py-6 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
            Delicious pasta
            <br />
            filled with{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-400 text-transparent bg-clip-text">
              goodies
            </span>
            .
          </h1>
          <p className="max-w-2xl mb-6 text-white dark:text-amber-500 lg:mb-8 md:text-lg lg:text-xl">
            Your beloved handbook for cooking
            <br />
            front-end apps, our way.
          </p>
          <div className="space-y-4 text-slate-900 sm:flex sm:space-y-0 sm:space-x-4">
            <Link
              href="/front-end-handbook/introduction"
              className="bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Browse handbook
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="/img/mirko.png"
            width={256}
            height={256}
            alt="Hero"
            className={styles.pic}
          />
        </div>
      </div>
    </section>
  );
};
