import SkeletonCard from "@/components/ui/SkeletonCard";

export default function Loading() {
  return (
    <div className="flex flex-col animate-pulse min-h-screen">
      {/* Hero Skeleton */}
      <div className="w-full bg-slate-200 dark:bg-slate-800/20 h-[50vh] flex flex-col items-center justify-center p-6 space-y-6 overflow-hidden relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 opacity-50"></div>
        <div className="w-32 h-8 bg-slate-300 dark:bg-slate-700/50 rounded-full relative z-10"></div>
        <div className="w-full max-w-3xl h-16 md:h-20 bg-slate-300 dark:bg-slate-700/50 rounded-2xl relative z-10"></div>
        <div className="w-full max-w-lg h-8 bg-slate-300 dark:bg-slate-700/50 rounded-xl relative z-10"></div>
      </div>
      
      {/* Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="w-48 h-10 bg-slate-200 dark:bg-slate-800/50 rounded-xl mb-12"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
