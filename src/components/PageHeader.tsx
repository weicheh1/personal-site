type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-10">
      <h1 className="font-serif text-3xl text-foreground sm:text-4xl">{title}</h1>
      <div className="mt-3 h-px w-16 bg-accent" />
      {description && (
        <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
