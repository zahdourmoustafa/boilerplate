'use client';

import { useRouter } from 'next/navigation';
import { useSession, signOut } from '~/lib/auth-client';
import Link from 'next/link';

export function Navigation() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const handleLogin = () => {
    router.push('/signin');
  };

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/');
        },
      },
    });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-2xl font-bold text-transparent">
              MB
            </div>
            <span className="ml-2 text-lg font-semibold text-gray-900">
              Boilerplate
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
            <a
              href="#docs"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Documentation
            </a>
            <a
              href="#pricing"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Pricing
            </a>
          </div>

          {/* Auth Section */}
          <div className="flex items-center">
            {isPending ? (
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
            ) : session ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/dashboard"
                  className="text-gray-600 transition-colors hover:text-gray-900"
                >
                  Dashboard
                </Link>
                <div className="flex items-center space-x-3">
                  {session.user.image && (
                    <img
                      src={session.user.image}
                      alt={session.user.name || 'User'}
                      className="h-8 w-8 rounded-full"
                    />
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {session.user.name}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="text-sm text-gray-500 transition-colors hover:text-gray-700"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
