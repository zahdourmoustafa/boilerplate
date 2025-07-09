import { z } from 'zod';
import { procedure, router } from '../trpc';

export const postsRouter = router({
  getAll: procedure
    .query(() => {
      // In a real app, this would fetch from your database
      return [
        { id: '1', title: 'First Post', content: 'This is the first post', createdAt: new Date().toISOString() },
        { id: '2', title: 'Second Post', content: 'This is the second post', createdAt: new Date().toISOString() },
      ];
    }),

  getById: procedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      // In a real app, this would fetch from your database
      const posts = [
        { id: '1', title: 'First Post', content: 'This is the first post', createdAt: new Date().toISOString() },
        { id: '2', title: 'Second Post', content: 'This is the second post', createdAt: new Date().toISOString() },
      ];
      
      const post = posts.find(p => p.id === input.id);
      if (!post) {
        throw new Error('Post not found');
      }
      
      return post;
    }),

  create: procedure
    .input(
      z.object({
        title: z.string().min(1).max(100),
        content: z.string().min(1).max(1000),
      })
    )
    .mutation(({ input }) => {
      // In a real app, this would save to your database
      const newPost = {
        id: Math.random().toString(36).substring(7),
        title: input.title,
        content: input.content,
        createdAt: new Date().toISOString(),
      };
      
      return newPost;
    }),

  update: procedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().min(1).max(100).optional(),
        content: z.string().min(1).max(1000).optional(),
      })
    )
    .mutation(({ input }) => {
      // In a real app, this would update in your database
      return {
        id: input.id,
        title: input.title || 'Updated Title',
        content: input.content || 'Updated Content',
        updatedAt: new Date().toISOString(),
      };
    }),

  delete: procedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input }) => {
      // In a real app, this would delete from your database
      return { success: true, deletedId: input.id };
    }),
}); 