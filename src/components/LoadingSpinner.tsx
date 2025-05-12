export default function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-200 border-t-indigo-500 mb-4"></div>
      <p className="text-indigo-300 text-lg">Loading...</p>
    </div>
  );
}
