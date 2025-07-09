# TweetWriter - Moustafa's Next.js Boilerplate

This is a production-ready Next.js boilerplate with authentication, payments, AI integration, and beautiful UI components.

## 🚀 Features

- ✅ **Next.js 15** with App Router
- ✅ **tRPC v11** with full TypeScript support
- ✅ **React Query** for client-side state management
- ✅ **Better Auth** with Google OAuth
- ✅ **Prisma** with Neon.tech PostgreSQL
- ✅ **Vercel AI SDK** for AI integration
- ✅ **Polar.sh** for payments
- ✅ **shadcn/ui** components
- ✅ **Tailwind CSS** for styling
- ✅ **TypeScript** end-to-end type safety

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── trpc/
│   │       └── [trpc]/
│   │           └── route.ts       # tRPC API handler
│   ├── demo/
│   │   └── page.tsx               # tRPC demo page
│   ├── layout.tsx                 # Root layout with providers
│   └── page.tsx                   # Landing page
├── components/
│   └── navigation.tsx             # Navigation component
├── lib/
│   ├── env.ts                     # Environment validation
│   ├── prisma.ts                  # Prisma client
│   ├── providers.tsx              # tRPC & React Query providers
│   └── utils.ts                   # Utility functions
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

2. **Set up environment variables:**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** to see the landing page

## 🎨 Pages

- **Landing Page** (`/`) - Welcome page with navigation and login button
- **tRPC Demo** (`/demo`) - Interactive tRPC examples and documentation

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio

## 🔧 Next Steps (Phase 2)

The landing page includes a "Sign in with Google" button that's ready for Phase 2 implementation:

1. Set up Better Auth with Google OAuth
2. Create protected dashboard routes
3. Implement user session management

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Connect to Vercel
3. Configure environment variables
4. Deploy!

## 📝 Environment Variables

Create a `.env.local` file with:

```env
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Authentication (Better Auth)
BETTER_AUTH_SECRET="..."
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
BETTER_AUTH_URL="http://localhost:3000"

# AI Integration
OPENAI_API_KEY="sk-..."
ANTHROPIC_API_KEY="sk-ant-..."

# Payments (Polar.sh)
POLAR_ACCESS_TOKEN="polar_at_..."
POLAR_WEBHOOK_SECRET="..."
POLAR_ORGANIZATION_ID="..."

# Application
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="Moustafa Boilerplate"
```
