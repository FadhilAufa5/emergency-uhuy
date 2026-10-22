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
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red bg-red/8 rounded-full mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-tight tracking-tight">
        {renderTitle()}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg text-ink-lighter leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
