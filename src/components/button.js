export default function Button({ bgColor, color, children }) {
  return (
    <button style={{ backgroundColor: bgColor, color: color }}>
      {children}
    </button>
  );
}
