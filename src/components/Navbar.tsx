import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-indigo-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="ml-2 text-xl font-bold">Fake Store</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
