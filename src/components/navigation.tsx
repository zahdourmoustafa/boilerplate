'use client';

import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-2xl font-bold text-transparent">
              TW
            </div>
            <span className="ml-2 text-lg font-semibold text-gray-900">
              TweetWriter
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center space-x-8 md:flex">
            <a
              href="#features"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Features
            </a>
            <Link
              href="/components"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Components
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Dashboard
            </Link>
          </div>

          {/* Auth Section - Simplified for now */}
          <div className="flex items-center space-x-4">
            <Link
              href="/demo"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Demo
            </Link>
            <button className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
