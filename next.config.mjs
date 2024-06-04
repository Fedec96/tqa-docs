import nextra from "nextra";

/** @type {import("next").NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },

  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({ CESIUM_BASE_URL: JSON.stringify("/cesium") })
    );

    return config;
  },
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

export default withNextra(nextConfig);
