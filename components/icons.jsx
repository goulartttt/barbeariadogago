const rotations = { right: 0, down: 90, left: 180 };

export function ArrowIcon({ direction = "right" }) {
  return (
    <svg
      className={`icon icon--arrow icon--${direction}`}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      style={{ rotate: `${rotations[direction] ?? 0}deg` }}
    >
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="icon icon--star" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="m10 1.8 2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.7l-5.1 2.8L6 11.8l-4.3-4 5.8-.7z" />
    </svg>
  );
}

export function Stars({ count = 5, label = `${count} de 5 estrelas` }) {
  return (
    <span className="stars" role="img" aria-label={label}>
      {Array.from({ length: count }, (_, index) => <StarIcon key={index} />)}
    </span>
  );
}
