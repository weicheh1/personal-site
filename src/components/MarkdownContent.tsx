export function MarkdownContent({ content }: { content: string }) {
  const blocks = content.trim().split("\n\n");

  return (
    <div className="prose-dark space-y-4">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-8 text-xl font-semibold text-foreground first:mt-0"
            >
              {block.slice(3)}
            </h2>
          );
        }
        return (
          <p key={i} className="leading-relaxed text-muted">
            {block}
          </p>
        );
      })}
    </div>
  );
}
