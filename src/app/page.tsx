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
              TweetWriter
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            AI-powered tweet creation platform with analytics, scheduling, 
            and beautiful UI components built with Next.js and tRPC.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
              Start Writing
            </button>
            <button className="rounded-lg border border-gray-300 px-8 py-3 font-semibold text-gray-700 transition-colors hover:border-gray-400">
              View Dashboard
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              🤖
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              AI-Powered Writing
            </h3>
            <p className="text-gray-600">
              Generate engaging tweets with advanced AI assistance and 
              content optimization.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              📊
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Analytics Dashboard
            </h3>
            <p className="text-gray-600">
              Track performance, engagement metrics, and optimize your 
              content strategy.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              🎨
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Beautiful UI
            </h3>
            <p className="text-gray-600">
              Modern interface with 37+ shadcn/ui components, dark mode, 
              and responsive design.
            </p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
              ⚡
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Built with Modern Stack
            </h3>
            <p className="text-gray-600">
              Next.js 15, tRPC, TypeScript, Tailwind CSS, and Prisma for 
              maximum performance and developer experience.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
              🔧
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Developer Ready
            </h3>
            <p className="text-gray-600">
              Complete component library, theme system, and development 
              tools ready for customization.
            </p>
          </div>
        </div>

        {/* Demo Links */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-gray-600">Explore the platform:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/dashboard"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700"
            >
              View Dashboard
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/components"
              className="inline-flex items-center font-medium text-green-600 hover:text-green-700"
            >
              UI Components
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/demo"
              className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700"
            >
              tRPC Demo
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
