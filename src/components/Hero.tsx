export default function Hero() {
  return (
    <section
      id="top"
      className="flex flex-col items-center justify-center px-6 pb-16 pt-28 text-center sm:pb-24 sm:pt-36"
    >
      <p className="text-sm font-medium tracking-wide text-accent">
        知念信之
      </p>
      <h1 className="mt-4 max-w-md text-[24px] font-bold leading-snug tracking-tight sm:max-w-xl sm:text-4xl">
        <span className="inline-block">現場の「不便」を、</span>
        <span className="inline-block">生成AIで解決する</span>
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
        {/* 意味のまとまりごとに改行させて、1〜2文字だけ次の行に残らないようにしている */}
        {[
          "私はエンジニアではありません。",
          "配送の仕事をしながら、",
          "バドミントンクラブの",
          "コーチもしています。",
          "身の回りの困りごとを",
          "AIと一緒にツールにして、",
          "日々の仕事や活動で",
          "使っています。",
        ].map((phrase) => (
          <span key={phrase} className="inline-block">
            {phrase}
          </span>
        ))}
      </p>
    </section>
  );
}
