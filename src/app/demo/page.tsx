'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trpc } from '~/lib/providers';

export default function DemoPage() {
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
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">tRPC Demo</h1>
        <p className="text-gray-600 mb-4">
          This page demonstrates the tRPC setup with queries and mutations.
        </p>
        <Link 
          href="/" 
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Back to Landing Page
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Query Example */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Query Example</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Enter text for greeting:
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="World"
              />
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <strong>Response:</strong>{' '}
              {hello.data?.greeting || 'Loading...'}
            </div>
          </div>
        </div>

        {/* Mutation Example */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Mutation Example</h2>
          <form onSubmit={handleCreatePost} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Post title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Content:</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 border rounded-md h-24"
                placeholder="Post content"
              />
            </div>
            <button
              type="submit"
              disabled={createPost.isPending}
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {createPost.isPending ? 'Creating...' : 'Create Post'}
            </button>
          </form>
        </div>

        {/* Secret Message */}
        <div className="border rounded-lg p-6 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Secret Message</h2>
          <div className="p-4 bg-gray-50 rounded-md">
            {secretMessage.data?.message || 'Loading secret message...'}
          </div>
        </div>
      </div>
    </div>
  );
}
