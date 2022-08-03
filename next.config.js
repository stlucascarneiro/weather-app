/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_ID
  }
}
  
module.exports = nextConfig