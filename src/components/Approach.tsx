const roles = [
  "現場の困りごとや条件を整理して、要望にまとめる",
  "AI（Claude Code）に、作ってほしいものを指示する",
  "できたものを実際に動かして、思った通りか確かめる",
  "おかしいところや使いにくいところを伝えて、直してもらう",
];

export default function Approach() {
  return (
    <section id="approach" className="bg-card px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-sm font-semibold tracking-wide text-accent">
          HOW I BUILD
        </h2>
        <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          私の作り方
        </h3>

        <p className="mt-8 leading-relaxed text-foreground">
          コードは自分で書いていません。私の役割は、次の4つです。
        </p>

        <ol className="mt-6 flex flex-col gap-3">
          {roles.map((role, i) => (
            <li key={role} className="flex gap-3 leading-relaxed text-foreground">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                {i + 1}
              </span>
              <span className="pt-0.5">{role}</span>
            </li>
          ))}
        </ol>

        <p className="mt-8 leading-relaxed text-foreground">
          例えば配送部門のシフトツールは、「3人体制と4人体制を切り替えたい」「担当コースに偏りが出ないようにしたい」といった現場の条件を一つずつAIに伝え、実際のシフト作りで使いながら改善を重ねてきました。コードの中身はまだ分からない部分も多いですが、使う人の目線で「何が必要か」を考えることを大切にしています。
        </p>
      </div>
    </section>
  );
}
