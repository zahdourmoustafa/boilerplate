import { Navigation } from '~/components/navigation';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />

      <main className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="mb-6 text-6xl font-bold text-gray-900">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Moustafa Boilerplate
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            A modern, production-ready Next.js boilerplate with authentication,
            payments, AI integration, and beautiful UI components.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
              Get Started
            </button>
            <button className="rounded-lg border border-gray-300 px-8 py-3 font-semibold text-gray-700 transition-colors hover:border-gray-400">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              🔐
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Authentication Ready
            </h3>
            <p className="text-gray-600">
              Google OAuth integration with Better Auth for secure user
              management.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              💳
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Payments Integrated
            </h3>
            <p className="text-gray-600">
              Polar.sh integration for subscription management and billing.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              🤖
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              AI Powered
            </h3>
            <p className="text-gray-600">
              Vercel AI SDK with OpenAI and Anthropic support built-in.
            </p>
          </div>
        </div>

        {/* Demo Link */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-gray-600">Want to see the tRPC demo?</p>
          <a
            href="/demo"
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700"
          >
            View tRPC Demo
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
