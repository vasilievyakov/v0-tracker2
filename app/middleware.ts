import { NextRequest, NextResponse } from "next/server";
import pinoHttp from "pino-http";
import { logger } from "@/lib/logger";

const httpLogger = pinoHttp({
  logger,
  autoLogging: {
    ignore: (req) => req.url?.startsWith("/_next") || req.url?.startsWith("/static"),
  },
});

export function middleware(request: NextRequest) {
  // pino-http expects Node.js IncomingMessage/ServerResponse; Next.js provides
  // Web standard Request/Response. We fall back to manual logging here.
  const start = Date.now();
  return async (response: Response | Promise<Response>) => {
    try {
      const res = await response;
      const duration = Date.now() - start;
      logger.info(
        {
          method: request.method,
          url: request.url,
          status: res.status,
          duration,
        },
        "request completed",
      );
      return res;
    } catch (error) {
      const duration = Date.now() - start;
      logger.error(
        {
          err: error,
          method: request.method,
          url: request.url,
          duration,
        },
        "request errored",
      );
      throw error;
    }
  };
}

export const config = {
  matcher: "/api/:path*",
};
