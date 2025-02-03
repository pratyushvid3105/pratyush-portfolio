import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    });
    return config;
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

const sentryWebpackPluginOptions = process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN
  ? {
      silent: true,
      hideSourceMaps: true,
    }
  : null;

export default process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN
  ? withSentryConfig(nextConfig, sentryWebpackPluginOptions)
  : nextConfig;
