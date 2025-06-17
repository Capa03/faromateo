import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /* https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects */
  redirects: async () => [
    {
      source: '/',
      destination: '/welcome',
      permanent: true,
    },
  ],
};

export default nextConfig;
