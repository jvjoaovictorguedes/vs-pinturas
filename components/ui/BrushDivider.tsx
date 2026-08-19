export default function BrushDivider({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M0 40 C 150 10, 300 55, 460 30 C 620 6, 760 50, 920 26
        C 1040 8, 1120 34, 1200 18 L 1200 60 L 0 60 Z"
      />
    </svg>
  );
}
