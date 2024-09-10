/** @type {import('next').NextConfig} */

const withLess = require("next-with-less");

module.exports = withLess({
  images: {
    domains: ["media.kitsu.io", "media.kitsu.app"],
  },
  reactStrictMode: true,
});
