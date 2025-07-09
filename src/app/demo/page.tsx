'use client';

import { useState } from 'react';
import { trpc } from '~/lib/providers';

export default function HomePage() {
  const [text, setText] = useState('World');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Example query
  const hello = trpc.hello.useQuery({ text });

  // Example mutation
  const createPost = trpc.createPost.useMutation({
    onSuccess: data => {
      console.log('Post created:', data);
      setTitle('');
      setContent('');
    },
  });

  // Example query without input
  const secretMessage = trpc.secretMessage.useQuery();

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      createPost.mutate({ title, content });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            🚀 tRPC Boilerplate Setup Complete!
          </h1>

          {/* Hello Query Example */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Query Example
            </h2>
            <div className="mb-4 flex gap-4">
              <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Enter text for greeting"
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            {hello.isLoading && <p className="text-gray-600">Loading...</p>}
            {hello.error && (
              <p className="text-red-600">Error: {hello.error.message}</p>
            )}
            {hello.data && (
              <div className="rounded-md border border-green-200 bg-green-50 p-4">
                <p className="font-medium text-green-800">
                  {hello.data.greeting}
                </p>
                <p className="text-sm text-green-600">
                  Timestamp: {hello.data.timestamp}
                </p>
              </div>
            )}
          </div>

          {/* Create Post Mutation Example */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Mutation Example
            </h2>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Post title"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Post content"
                rows={4}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={createPost.isPending || !title || !content}
                className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {createPost.isPending ? 'Creating...' : 'Create Post'}
              </button>
            </form>

            {createPost.error && (
              <p className="mt-2 text-red-600">
                Error: {createPost.error.message}
              </p>
            )}

            {createPost.data && (
              <div className="mt-4 rounded-md border border-blue-200 bg-blue-50 p-4">
                <h3 className="font-semibold text-blue-800">
                  Post Created Successfully!
                </h3>
                <p className="text-blue-700">ID: {createPost.data.id}</p>
                <p className="text-blue-700">Title: {createPost.data.title}</p>
                <p className="text-blue-700">
                  Content: {createPost.data.content}
                </p>
                <p className="text-sm text-blue-600">
                  Created: {createPost.data.createdAt}
                </p>
              </div>
            )}
          </div>

          {/* Secret Message Example */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Protected Query Example
            </h2>
            {secretMessage.isLoading && (
              <p className="text-gray-600">Loading secret...</p>
            )}
            {secretMessage.error && (
              <p className="text-red-600">
                Error: {secretMessage.error.message}
              </p>
            )}
            {secretMessage.data && (
              <div className="rounded-md border border-yellow-200 bg-yellow-50 p-4">
                <p className="font-medium text-yellow-800">
                  🔐 {secretMessage.data.message}
                </p>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="rounded-md border border-gray-200 bg-gray-50 p-6">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              📚 What&apos;s Set Up
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ tRPC server with App Router support</li>
              <li>✅ React Query integration</li>
              <li>✅ TypeScript end-to-end type safety</li>
              <li>✅ Example queries and mutations</li>
              <li>✅ Context setup for authentication/database</li>
              <li>✅ Path aliases configured (~/* and @/*)</li>
            </ul>

            <div className="mt-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                📁 File Structure Created
              </h3>
              <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm text-gray-700">
                {`src/
├── server/
│   ├── trpc.ts              # tRPC initialization
│   └── routers/
│       └── _app.ts          # Main app router
├── app/
│   └── api/
│       └── trpc/
│           └── [trpc]/
│               └── route.ts # API route handler
└── lib/
    └── providers.tsx        # tRPC & React Query providers`}
              </pre>
            </div>

            <div className="mt-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                🚀 Next Steps
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Add your database/Prisma integration</li>
                <li>• Set up authentication middleware</li>
                <li>• Create more routers for your features</li>
                <li>• Add input validation with Zod</li>
                <li>• Configure environment variables</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
