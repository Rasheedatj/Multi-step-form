export default function Button({
  bgColor,
  color,
  children,
  onClickNext,
  onClickPrevious,
  direction,
}) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={() => (direction === 'next' ? onClickNext() : onClickPrevious())}
    >
      {children}
    </button>
  );
}
