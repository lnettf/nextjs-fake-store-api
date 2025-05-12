import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-700 to-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-200 mb-8">
          Page Not Found
        </h2>
        <p className="text-gray-300 mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-indigo-500 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-400 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
