import { initTRPC } from '@trpc/server';
import { cache } from 'react';

/**
 * Creates context for tRPC server
 * This is where you can add authentication, database connections, etc.
 */
export const createTRPCContext = cache(async () => {
  return {
    // Add your context here (e.g., user session, db connection)
    userId: null as string | null,
  };
});

type Context = Awaited<ReturnType<typeof createTRPCContext>>;

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  // transformer: superjson, // Add if you need superjson
});

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const procedure = t.procedure;
export const createCallerFactory = t.createCallerFactory; 