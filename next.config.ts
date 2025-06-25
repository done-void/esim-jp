/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "standalone",
  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
    localeDetection: true,
  },
};

module.exports = nextConfig;
