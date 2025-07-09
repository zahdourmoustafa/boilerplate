import { z } from 'zod';
import { procedure, router } from '../trpc';
import { postsRouter } from './posts';

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `Hello ${opts.input.text}!`,
        timestamp: new Date().toISOString(),
      };
    }),

  // Example mutation
  createPost: procedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
      }),
    )
    .mutation(async (opts) => {
      // Here you would typically save to your database
      const post = {
        id: Math.random().toString(36).substring(7),
        title: opts.input.title,
        content: opts.input.content,
        createdAt: new Date().toISOString(),
      };
      
      return post;
    }),

  // Example protected procedure (you can add auth middleware later)
  secretMessage: procedure
    .query(() => {
      return {
        message: 'This is a secret message!',
      };
    }),

  // Sub-router for posts
  posts: postsRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter; 