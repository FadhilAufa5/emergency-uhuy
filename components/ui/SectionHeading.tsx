import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  // Split title by highlight word to render it differently
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="font-handwritten text-red relative inline-block" style={{ transform: "rotate(-1deg)" }}>
          {highlight}
        </span>
        {parts[1] || ""}
      </>
    );
  };

  return (
    <div
      className={cn(
        "mb-12 relative z-10",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("mb-3.5", align === "center" ? "flex justify-center" : "")}>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-red bg-white/95 backdrop-blur-sm border border-red/20 rounded-full shadow-2xs">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-ink leading-[1.18] tracking-tight">
        {renderTitle()}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3.5 text-base sm:text-lg text-ink-light leading-relaxed font-normal",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
