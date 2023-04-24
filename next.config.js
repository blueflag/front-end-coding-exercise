/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
          APP_NAME: 'Frontend Coding Excercise',
      API_URI: process.env.NEXT_PUBLIC_API_URI,
      },
    serverRuntimeConfig: {
          APP_NAME: 'Frontend Coding Excercise',
      API_URI: process.env.NEXT_PUBLIC_API_URI,
      },
  }
  
  module.exports = nextConfig
  