export function ArrowIcon({ direction = "right" }) {
  const rotations = { right: 0, left: 180, down: 90 };
  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 20 20"
      aria-hidden="true"
      style={{ transform: `rotate(${rotations[direction] ?? 0}deg)` }}
    >
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}
