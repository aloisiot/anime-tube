/** @type {import('next').NextConfig} */

const  withLess  =  require ( "next-with-less" ) ;

const nextConfig = withLess ({
  images: {
    domains: ['os.alipayobjects.com', 'img.freepik.com'],
  },
  reactStrictMode: true,
  lessLoaderOptions : { 
    /* ... */ 
  } ,
})

module.exports = nextConfig
