// 小見出しごとの本文。段落は配列の1要素＝1段落
const blocks = [
  {
    heading: "きっかけ",
    paragraphs: [
      "中学生のバドミントンクラブでコーチをしています。指導していて悩んでいるのは、言葉で説明しても、選手が本当に理解できているのか分からないことです。また、自分の見立てが本当に合っているのか、自信を持てないこともあります。",
      "同じことを何度も指摘しているのに、どうすれば改善できるのかが、選手にもコーチにも分からない。そんな場面が続く中で、試合の動画を使って、感覚ではなく客観的に一緒に考えられるようにしたいと思いました。",
    ],
  },
  {
    heading: "作るもの",
    paragraphs: [
      "シングルスの試合を対象に、まずは試合動画を見ながら、ラリーが終わった場面だけを記録するアプリを作ります。コート図をタップして「打った位置」を選び、「ショットの種類」「結果（得点・ミス）」「ミスの種類（ネット・アウトなど）」を記録します。記録がたまると、ミスの多い場所がコート図の上に色で表示され、試合ごとや選手ごとに比べられるようになります。記録をタップすると動画のその場面に戻れるので、「この場面」と映像で一緒に確認できます。",
      "次の段階では、姿勢推定の技術を使い、手前の選手の足元を動画から自動で追いかけて、コート上の動いた道すじを表示する機能に挑戦します。最初に手で記録したデータは、自動解析が正しく動いているかを確かめる「答え合わせ」にも使います。",
      "動画はサーバーに送らず、使う人のスマホやパソコンの中だけで扱う作りにして、選手の映像を外に出さずに使えるようにします。",
    ],
  },
  {
    heading: "自分がどう使うか",
    paragraphs: [
      "クラブの練習試合や大会の動画で実際に使い、選手と一緒に画面を見ながら「どこで、どんなミスが起きているか」を確認します。自分の見立てが合っているかをデータで確かめ、その結果をもとに練習メニューを考えます。使いながら不便な点を見つけて、毎週改善していきます。",
    ],
  },
  {
    heading: "目指す形",
    paragraphs: [
      "最終的には、近くにデータ分析ができる人がいない部活やクラブのコーチでも、スマホで撮った動画だけで使えるツールにしたいと考えています。",
    ],
  },
];

export default function Bootcamp() {
  return (
    <section id="bootcamp" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-sm font-semibold tracking-wide text-accent">
          BOOTCAMP
        </h2>
        <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          ブートキャンプで作りたいもの
        </h3>

        <div className="mt-8 rounded-xl border border-accent/40 bg-card p-6">
          <p className="text-lg font-bold leading-snug">
            <span className="inline-block">バドミントンの</span>
            <span className="inline-block">「動き方」と「ミスの傾向」が</span>
            <span className="inline-block">見えるアプリ</span>
          </p>

          {blocks.map((block) => (
            <div key={block.heading} className="mt-8">
              <h4 className="border-l-4 border-accent pl-3 font-semibold">
                {block.heading}
              </h4>
              {block.paragraphs.map((text) => (
                <p
                  key={text}
                  className="mt-3 text-sm leading-relaxed text-foreground sm:text-base"
                >
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
