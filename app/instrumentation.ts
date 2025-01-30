import * as Sentry from "@sentry/nextjs";

export function register() {
  Sentry.init({
    dsn: "https://289ff60b0289384019e2e18cdb5217a4@o4508719636742144.ingest.us.sentry.io/4508719663677440",
    tracesSampleRate: 1,
    debug: false,
    integrations: [
      Sentry.replayIntegration(),
      Sentry.feedbackIntegration({
        colorScheme: "dark",
      }),
    ],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}
