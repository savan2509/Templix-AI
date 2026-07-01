import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

let prismaClient: PrismaClient;
const connectionString = process.env.DATABASE_URL;
const isPlaceholderDb = !connectionString || connectionString.includes("johndoe:randompassword");

// Exported status indicating if database is online/configured
export let isDbOnline = !isPlaceholderDb;

export function setDbOnline(status: boolean) {
  isDbOnline = status;
}

if (typeof window === "undefined") {
  if (connectionString && !isPlaceholderDb) {
    // Use low connection timeout to fail fast (1.5 seconds instead of infinite/30s OS timeout)
    const pool = new pg.Pool({ 
      connectionString,
      connectionTimeoutMillis: 1500,
    });

    // Check database connection in background
    pool.query("SELECT 1")
      .then(() => {
        isDbOnline = true;
      })
      .catch((err) => {
        console.warn("Database connection is offline. Skipping DB queries on rendering cycles. Error:", err.message);
        isDbOnline = false;
      });

    const adapter = new PrismaPg(pool);

    if (!globalForPrisma.prisma) {
      globalForPrisma.prisma = new PrismaClient({
        adapter,
        log: [],
      });
    }
    prismaClient = globalForPrisma.prisma;
  } else {
    isDbOnline = false;
    prismaClient = new Proxy({} as PrismaClient, {
      get(target, prop) {
        return () => {
          throw new Error(`Database offline or connection string missing. Cannot query db.${String(prop)}.`);
        };
      },
    });
  }
} else {
  prismaClient = {} as PrismaClient;
}

export const db = prismaClient;
