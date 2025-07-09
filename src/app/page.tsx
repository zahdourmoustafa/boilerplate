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
    onSuccess: (data) => {
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
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            🚀 tRPC Boilerplate Setup Complete!
          </h1>
          
          {/* Hello Query Example */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Query Example
            </h2>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text for greeting"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {hello.isLoading && (
              <p className="text-gray-600">Loading...</p>
            )}
            {hello.error && (
              <p className="text-red-600">Error: {hello.error.message}</p>
            )}
            {hello.data && (
              <div className="bg-green-50 border border-green-200 rounded-md p-4">
                <p className="text-green-800 font-medium">
                  {hello.data.greeting}
                </p>
                <p className="text-green-600 text-sm">
                  Timestamp: {hello.data.timestamp}
                </p>
              </div>
            )}
          </div>

          {/* Create Post Mutation Example */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Mutation Example
            </h2>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Post content"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={createPost.isLoading || !title || !content}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {createPost.isLoading ? 'Creating...' : 'Create Post'}
              </button>
            </form>
            
            {createPost.error && (
              <p className="text-red-600 mt-2">
                Error: {createPost.error.message}
              </p>
            )}
            
            {createPost.data && (
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-4">
                <h3 className="font-semibold text-blue-800">
                  Post Created Successfully!
                </h3>
                <p className="text-blue-700">ID: {createPost.data.id}</p>
                <p className="text-blue-700">Title: {createPost.data.title}</p>
                <p className="text-blue-700">Content: {createPost.data.content}</p>
                <p className="text-blue-600 text-sm">
                  Created: {createPost.data.createdAt}
                </p>
              </div>
            )}
          </div>

          {/* Secret Message Example */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Protected Query Example
            </h2>
            {secretMessage.isLoading && (
              <p className="text-gray-600">Loading secret...</p>
            )}
            {secretMessage.error && (
              <p className="text-red-600">Error: {secretMessage.error.message}</p>
            )}
            {secretMessage.data && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                <p className="text-yellow-800 font-medium">
                  🔐 {secretMessage.data.message}
                </p>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-gray-50 border border-gray-200 rounded-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              📚 What's Set Up
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
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                📁 File Structure Created
              </h3>
              <pre className="bg-gray-100 p-4 rounded text-sm text-gray-700 overflow-x-auto">
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
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
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
