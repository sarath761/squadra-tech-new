interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}

export default function SectionHeading({ title, subtitle, alignment = "center", className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${alignment === "center" ? "text-center mx-auto" : "text-left"} ${className}`}>
      <h2 className="text-4xl lg:text-5xl font-serif italic mb-4">{title}</h2>
      {subtitle && <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
