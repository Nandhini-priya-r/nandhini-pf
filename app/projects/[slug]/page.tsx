import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0f172a] text-white py-32">
        <div className="container mx-auto">
          <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32">

            <span className="inline-block mb-4 text-sm tracking-widest uppercase text-emerald-400">
              Case Study
            </span>

            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              {project.title}
            </h1>

            <p className="text-lg text-slate-300 max-w-3xl">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-1 rounded-full border border-slate-600 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= HERO IMAGE ================= */}
      <section className="bg-[#0f172a] pb-40">
        <div className="container mx-auto">
          <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32">
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-16"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ROLE / SCOPE ================= */}
      <section className="bg-white py-32">
        <div className="container mx-auto">
          <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <Stat title="My Role" value={project.role} />
              <Stat title="Project Type" value="Production Application" />
              <Stat title="Platform" value="Web Platform" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM & GOALS ================= */}
      <section className="bg-[#f8fafc] py-32">
        <div className="container mx-auto">
          <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32">

            <TwoColumn title="The Problem" items={project.problem} />
            <TwoColumn title="Goals & Objectives" items={project.goals} />

          </div>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="bg-[#0f172a] text-white py-32">
        <div className="container mx-auto">
          <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32">

            <h2 className="text-4xl font-bold mb-10">
              The Solution
            </h2>

            <ul className="space-y-6 max-w-3xl text-lg text-indigo-100">
              {project.solution.map((item) => (
                <li key={item}>✔ {item}</li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {/* ================= CHALLENGES & LEARNINGS ================= */}
      <section className="bg-white py-32">
        <div className="container mx-auto">
          <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h3 className="text-3xl font-semibold mb-6">
                  Challenges
                </h3>
                <List items={project.challenges} />
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-6">
                  What I Learned
                </h3>
                <p className="text-slate-600 text-lg">
                  {project.learnings}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-black text-white py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Want to see it in action?
        </h2>

        <a
          href={project.liveLink}
          target="_blank"
          className="inline-block bg-white text-black px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition"
        >
          View Live Project →
        </a>
      </section>
    </>
  );
}

/* ================= COMPONENTS ================= */

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-10 shadow-md">
      <p className="text-sm uppercase text-slate-500 mb-2">
        {title}
      </p>
      <p className="text-xl font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function TwoColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mb-24 max-w-4xl">
      <h2 className="text-4xl font-bold mb-6">
        {title}
      </h2>
      <List items={items} />
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-3 text-slate-600 text-lg">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
