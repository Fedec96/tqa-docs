import Link from "next/link";
import { Brand } from "@/components/brand";

interface FooterLink {
  title: string;
  href: string;
}

export interface FooterProps {
  links?: readonly FooterLink[];
}

export const Footer = ({ links }: FooterProps) => {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 mt-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <Brand scale={26} textSize="sm" />
          </Link>

          {links?.length ? (
            <ul className="flex flex-wrap items-center my-3 sm:my-0 text-sm font-medium text-gray-500 dark:text-gray-400">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    target="_blank"
                    href={link.href}
                    className="hover:underline me-4 md:me-6"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <span className="block text-sm mt-2 text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Federico Cappelletti &middot; MIT
          license
        </span>
      </div>
    </footer>
  );
};
