import pino from "pino";

// Configure Pino structured logger
export const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  browser: {
    asObject: true,
  },
  // Use pino-pretty terminal colors formatting in local development
  transport:
    process.env.NODE_ENV === "development"
      ? {
          target: "pino-pretty",
          options: {
            colorize: true,
            translateTime: "UTC:yyyy-mm-dd HH:MM:ss.l",
            ignore: "pid,hostname",
          },
        }
      : undefined,
});

// Production Sentry Monitoring placeholder hooks
export const reportError = (error: Error, context?: Record<string, any>) => {
  logger.error({ err: error, ...context }, "Logged Exception captured");
  
  // Later Phase 4: Sentry.captureException(error, { extra: context });
};

export const logEvent = (name: string, payload?: Record<string, any>) => {
  logger.info({ event: name, ...payload }, `Audit Event Logged: ${name}`);
};
