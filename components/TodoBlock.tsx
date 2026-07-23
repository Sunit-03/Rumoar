export function TodoBlock({ text, compact = false }: { text: string; compact?: boolean }) {
  return (
    <div className={`todo-block${compact ? " compact" : ""}`}>
      <span className="todo-label mono">// TODO — SUNIT</span>
      <p>{text}</p>
    </div>
  );
}
