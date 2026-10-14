import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-sm font-semibold tracking-wide text-accent">
          SKILLS
        </h2>
        <h3 className="mt-2 text-center text-2xl font-bold tracking-tight sm:text-3xl">
          制作で使っているツール
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          制作の過程で、生成AIが選んで使っているツールです。動きがなんとなく分かるものもあれば、まだブラックボックスのままのものもあります。
        </p>

        <div className="mt-8 flex flex-col gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <p className="text-sm font-medium text-muted">{cat.category}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-card px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
