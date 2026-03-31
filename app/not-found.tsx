import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl font-display font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-display font-semibold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-400 mb-8 font-display font-light">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-primary hover:bg-primary/90 text-white font-display font-semibold py-3 px-8 rounded-xl transition-all inline-flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
