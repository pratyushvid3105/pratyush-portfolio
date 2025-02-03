import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // Required for static exports
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
  // Remove experimental config
  typescript: {
    ignoreBuildErrors: false,
  },
};

// Only enable Sentry in non-static environments
const sentryWebpackPluginOptions = process.env.SENTRY_AUTH_TOKEN
  ? {
      silent: true,
      hideSourceMaps: true,
    }
  : null;

export default process.env.SENTRY_AUTH_TOKEN
  ? withSentryConfig(nextConfig, sentryWebpackPluginOptions)
  : nextConfig;
