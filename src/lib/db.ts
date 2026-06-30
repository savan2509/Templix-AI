import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

let prismaClient: PrismaClient;

if (typeof window === "undefined") {
  const connectionString = process.env.DATABASE_URL;

  if (connectionString) {
    const pool = new pg.Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    
    prismaClient =
      globalForPrisma.prisma ??
      new PrismaClient({
        adapter,
        log: [],
      });
  } else {
    // Dynamic Proxy fallback to prevent build compilation errors when DATABASE_URL is not set
    prismaClient = new Proxy({} as PrismaClient, {
      get(target, prop) {
        return () => {
          throw new Error(`Database connection string missing. Cannot access db.${String(prop)}.`);
        };
      },
    });
  }
} else {
  prismaClient = {} as PrismaClient;
}

export const db = prismaClient;

if (process.env.NODE_ENV !== "production" && process.env.DATABASE_URL) {
  globalForPrisma.prisma = db;
}
