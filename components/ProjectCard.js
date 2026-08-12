export default function ProjectCard({ title, description, href, tags = [] }) {
  const content = (
    <div className="rounded-lg border border-slate-200 p-5 transition hover:border-slate-400">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {content}
    </a>
  );
}
