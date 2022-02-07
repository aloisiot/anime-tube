/** @type {import('next').NextConfig} */

const  withLess  =  require ( "next-with-less" ) ;

const nextConfig = withLess ({
  images: {
    domains: ['media.kitsu.io'],
  },
  reactStrictMode: true,
})

module.exports = nextConfig
