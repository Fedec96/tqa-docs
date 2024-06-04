import { Fragment } from "react";
import { useRouter } from "next/router";
import { ThemeSwitch, type DocsThemeConfig } from "nextra-theme-docs";

import { NAME } from "@/constants/app";
import { Footer } from "@/components/footer";
import { Brand } from "@/components/brand";

const config: DocsThemeConfig = {
  feedback: { content: null },
  editLink: { text: "Edit this page on GitHub" },
  docsRepositoryBase: "https://github.com/Fedec96/tqa-docs/edit/main",
  sidebar: { defaultMenuCollapseLevel: 1, autoCollapse: true },
  darkMode: false,
  toc: { title: "On this page...", backToTop: true },
  search: { placeholder: "Search..." },
  nextThemes: { defaultTheme: "dark" },
  primaryHue: 200,
  primarySaturation: { light: 100, dark: 80 },

  useNextSeoProps: () => {
    const { asPath } = useRouter();

    if (asPath === "/") {
      return { titleTemplate: NAME };
    }

    return { titleTemplate: `%s | ${NAME}` };
  },

  head: (
    <Fragment>
      <meta charSet="utf-8" />

      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no"
      />

      <link rel="icon" href="/img/logo.png" sizes="32x32" />
    </Fragment>
  ),

  logo: <Brand scale={19} animate />,

  navbar: {
    extraContent: (
      <ThemeSwitch lite className="[&_span]:hidden !bg-transparent" />
    ),
  },

  footer: {
    component: (
      <Footer
        links={[
          { title: "npm", href: "https://npmjs.com/package/tqa" },
          { title: "GitHub", href: "https://github.com/Fedec96/tqa" },
          {
            title: "GitHub (docs)",
            href: "https://github.com/Fedec96/tqa-docs",
          },
        ]}
      />
    ),
  },
};

export default config;
