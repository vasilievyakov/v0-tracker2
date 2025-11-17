import pino from "pino";

/**
 * Shared application logger.
 *
 * Uses pino which is fast and supports JSON logging. By default it pretty-prints
 * in development and logs JSON in production (Vercel / serverless).  The level
 * can be controlled via the LOG_LEVEL env variable.
 */
const isProd = process.env.NODE_ENV === "production";

export const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: isProd
    ? undefined // default: logs JSON to stdout in prod
    : {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "HH:MM:ss.l",
          ignore: "pid,hostname",
        },
      },
});
