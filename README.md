# TweetWriter - tRPC Boilerplate

This is a Next.js project with a complete tRPC setup using the App Router.

## 🚀 Features

- ✅ **tRPC v11** with full TypeScript support
- ✅ **Next.js 15** with App Router
- ✅ **React Query** for client-side state management
- ✅ **Zod** for runtime type validation
- ✅ **Tailwind CSS** for styling
- ✅ **TypeScript** end-to-end type safety
- ✅ **Prisma** ready for database integration

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── trpc/
│   │       └── [trpc]/
│   │           └── route.ts       # tRPC API handler
│   ├── layout.tsx                 # Root layout with providers
│   └── page.tsx                   # Demo page with examples
├── lib/
│   └── providers.tsx              # tRPC & React Query providers
└── server/
    ├── trpc.ts                    # tRPC initialization & context
    └── routers/
        ├── _app.ts                # Main app router
        └── posts.ts               # Example posts router
```

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** to see the demo page

## 📚 tRPC Usage Examples

### Client-side Usage

```tsx
'use client';
import { trpc } from '~/lib/providers';

export default function MyComponent() {
  // Query example
  const hello = trpc.hello.useQuery({ text: 'World' });
  
  // Mutation example
  const createPost = trpc.createPost.useMutation();
  
  // Sub-router usage
  const posts = trpc.posts.getAll.useQuery();
  
  return (
    <div>
      {hello.data?.greeting}
    </div>
  );
}
```

### Server-side Router Definition

```tsx
// src/server/routers/example.ts
import { z } from 'zod';
import { procedure, router } from '../trpc';

export const exampleRouter = router({
  getById: procedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      // Your logic here
      return { id: input.id, name: 'Example' };
    }),
    
  create: procedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input }) => {
      // Your mutation logic here
      return { success: true };
    }),
});
```

## 🔧 Adding New Routers

1. **Create a new router file:**
   ```tsx
   // src/server/routers/myFeature.ts
   import { z } from 'zod';
   import { procedure, router } from '../trpc';
   
   export const myFeatureRouter = router({
     // your procedures here
   });
   ```

2. **Add it to the main app router:**
   ```tsx
   // src/server/routers/_app.ts
   import { myFeatureRouter } from './myFeature';
   
   export const appRouter = router({
     // existing routes...
     myFeature: myFeatureRouter,
   });
   ```

## 🔐 Adding Authentication

You can add authentication middleware by modifying the context in `src/server/trpc.ts`:

```tsx
export const createTRPCContext = cache(async () => {
  // Get user session from cookies/headers
  const session = await getServerSession();
  
  return {
    session,
    userId: session?.user?.id || null,
  };
});

// Create protected procedure
export const protectedProcedure = procedure.use(async ({ ctx, next }) => {
  if (!ctx.session) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      ...ctx,
      session: ctx.session,
    },
  });
});
```

## 🗄️ Database Integration

This project includes Prisma. To set it up:

1. Configure your database URL in `.env`
2. Update your Prisma schema
3. Use Prisma in your tRPC procedures:

```tsx
import { prisma } from '~/lib/prisma';

export const postsRouter = router({
  getAll: procedure
    .query(async () => {
      return await prisma.post.findMany();
    }),
});
```

## 🔗 Useful Links

- [tRPC Documentation](https://trpc.io)
- [React Query Documentation](https://tanstack.com/query)
- [Zod Documentation](https://zod.dev)
- [Next.js Documentation](https://nextjs.org/docs)

## 📝 Environment Variables

Create a `.env.local` file with:

```env
# Database
DATABASE_URL="your-database-url"

# Auth (if using NextAuth.js)
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Connect to Vercel
3. Configure environment variables
4. Deploy!
