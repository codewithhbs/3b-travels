// Four-point sparkles scattered over the dark gradient sections
function Spark({ x, y, s }) {
  return (
    <svg className="spark" style={{ left: x, top: y, width: s, height: s }} viewBox="0 0 40 40" aria-hidden="true">
      <path fill="#fff" d="M20 0Q20.5 19.5 40 20Q20.5 20.5 20 40Q19.5 20.5 0 20Q19.5 19.5 20 0Z" />
    </svg>
  );
}

export default function Sparkles({ items }) {
  return (
    <div className="sparkles" aria-hidden="true">
      {items.map((p, i) => <Spark key={i} {...p} />)}
    </div>
  );
}
