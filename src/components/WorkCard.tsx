import type { Work } from "@/data/works";

export default function WorkCard({ work }: { work: Work }) {
  return (
    // カード全体をタップでサイトへ飛べるように、「サイトを見る」のリンクをカード全面に広げている。
    // 「コードを見る」は z-10 でその上に重ねて、別のリンクとして押せるようにする。
    <div
      className={`relative rounded-xl border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-md ${
        work.url ? "border-accent/40 hover:border-accent" : "border-border"
      }`}
    >
      <h4 className="flex items-center gap-1.5 font-semibold">
        {work.title}
        {work.url && (
          <span className="text-accent" aria-hidden="true">
            ↗
          </span>
        )}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">{work.summary}</p>

      {work.usage && (
        <div className="mt-4 rounded-lg border-l-4 border-accent bg-accent/10 px-3 py-2 text-sm leading-relaxed">
          <span className="block text-xs font-semibold text-accent">
            使用状況
          </span>
          {work.usage}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {work.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-foreground">
        <span className="font-medium text-muted">工夫した点: </span>
        {work.point}
      </p>

      {work.note && (
        <p className="mt-4 text-xs text-muted">※ {work.note}</p>
      )}

      {(work.url || work.repo) && (
        <div className="mt-4 flex gap-4 text-xs font-semibold text-accent">
          {work.url && (
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 after:rounded-xl"
            >
              サイトを見る ↗
            </a>
          )}
          {work.repo && (
            <a
              href={work.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 hover:underline"
            >
              コードを見る ↗
            </a>
          )}
        </div>
      )}
    </div>
  );
}
