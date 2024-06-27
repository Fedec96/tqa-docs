import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./src/theme.config.tsx",
  defaultShowCopyCode: true,
});

export default withNextra();
