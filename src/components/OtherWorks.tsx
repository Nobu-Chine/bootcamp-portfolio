import { otherWorks } from "@/data/works";
import WorkCard from "@/components/WorkCard";

export default function OtherWorks() {
  return (
    <section id="works" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-sm font-semibold tracking-wide text-accent">
          OTHER WORKS
        </h2>
        <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          その他の作品
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {otherWorks.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
