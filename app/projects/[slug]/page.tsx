import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  CheckCircle,
  AlertTriangle,
  Layers,
  Smartphone,
  Zap,
} from "lucide-react";

/* ✅ Required for Next.js 15+ */
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="bg-[#0b0b0e] text-white pb-32">
      {/* ================= HERO ================= */}
      <section className="pt-28 pb-24 text-center px-4">
        <span className="inline-block mb-5 rounded-full border border-blue-500/30 px-4 py-2 text-xs tracking-wide text-blue-400">
          Production Case Study
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 leading-tight">
          {project.title.split(" ")[0]}{" "}
          <span className="text-blue-500 block sm:inline">
            {project.title.replace(project.title.split(" ")[0], "")}
          </span>
        </h1>

        <p className="max-w-[90%] sm:max-w-3xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed">
          {project.summary}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <a
            href={project.liveLink}
            target="_blank"
            className="rounded-full bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-700 transition"
          >
            View Live Demo →
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="
    rounded-full
    border border-white/20
    px-12 py-3.5            /* ⬅ Bigger on mobile */
    sm:px-8 sm:py-3        /* ⬅ Normal size on tablet+ */
    text-gray-300
    hover:bg-white/10
    transition
  "
          >
            Source Code
          </a>
        </div>
      </section>
{/* ================= META ================= */}
<section className="py-24">
  <div className="container mx-auto max-w-6xl text-center">

    {/* ROW 1 : ROLE / TYPE / PLATFORM */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">
      <Meta title="MY ROLE" value={project.role} />
      <Meta title="PROJECT TYPE" value="Production Application" />
      <Meta title="PLATFORM" value="Web & Mobile" />
    </div>

    {/* ROW 2 : TECH STACK (ALWAYS SEPARATE) */}
    <div className="flex flex-col items-center">
      <Meta title="TECH STACK">
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {project.tech.map((t) => (
            <GradientPill key={t}>{t}</GradientPill>
          ))}
        </div>
      </Meta>
    </div>

  </div>
</section>


      {/* ================= PROBLEM & SOLUTION ================= */}
      <section className="py-28">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-24 px-6">
          {/* PROBLEM */}
          <div>
            <h2 className="text-4xl font-bold mb-12">The Problem</h2>
            <ul className="space-y-10">
              {project.problem.map((p) => (
                <li key={p} className="flex items-start gap-5">
                  <GradientIcon>
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                  </GradientIcon>
                  <p className="text-gray-400 leading-relaxed pt-1">{p}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLUTION */}
          <div>
            <h2 className="text-4xl font-bold mb-12">The Solution</h2>
            <ul className="space-y-10">
              {project.solution.map((s) => (
                <li key={s} className="flex items-start gap-5">
                  <GradientIcon>
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </GradientIcon>
                  <p className="text-gray-400 leading-relaxed pt-1">{s}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CORE IMPLEMENTATION ================= */}
      <section className="py-28 text-center px-6">
        <h2 className="text-5xl font-bold mb-6">Core Implementation</h2>
        <p className="text-gray-500 mb-16 max-w-3xl mx-auto">
          Designed a scalable, performance-oriented frontend architecture
          ensuring long-term maintainability and smooth rendering.
        </p>

        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-10">
          <ImplCard
            icon={<Layers />}
            title="State Management"
            desc="Implemented efficient state management to handle complex UI and cart logic with minimal re-renders.
"
          />

          <ImplCard
            icon={<Smartphone />}
            title="Mobile-First Design"
            desc="Built mobile-first responsive layouts with optimized touch interactions across all screen sizes."
          />

          <ImplCard
            icon={<Zap />}
            title="Performance"
            desc="Optimized component rendering, hydration, and image loading to deliver fast and smooth user experiences."
          />
        </div>
      </section>

      {/* ================= LEARNINGS ================= */}
      <section className="py-28 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">What I Learned</h2>
        <p className="text-gray-400 leading-relaxed text-lg">
          {project.learnings}
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-32 px-4">
        <GradientWrapper radius="40px">
          <div className="rounded-[40px] bg-gradient-to-br from-[#111827] to-[#020617] py-20 text-center">
            <h3 className="text-4xl font-bold mb-8">Ready to collaborate?</h3>

            <a
              href="/contact"
              className="inline-block rounded-full bg-blue-600 px-12 py-4 text-lg font-semibold hover:bg-blue-700 transition"
            >
              Get in Touch
            </a>
          </div>
        </GradientWrapper>
      </section>
    </main>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Meta({
  title,
  value,
  children,
}: {
  title: string;
  value?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase">
        {title}
      </p>
      <div className="text-lg font-bold text-white">{value || children}</div>
    </div>
  );
}

function GradientWrapper({
  children,
  radius = "24px",
}: {
  children: React.ReactNode;
  radius?: string;
}) {
  return (
    <div
      className="p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 mx-auto max-w-5xl"
      style={{ borderRadius: radius }}
    >
      {children}
    </div>
  );
}

function GradientIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-[1px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b0b0e]">
        {children}
      </div>
    </div>
  );
}

function GradientPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="p-[1px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500">
      <span className="block rounded-full bg-[#141418] px-4 py-1 text-sm">
        {children}
      </span>
    </span>
  );
}

function ImplCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <GradientWrapper>
      <div className="rounded-3xl bg-[#141418] p-10 text-left transition hover:bg-[#1a1a22]">
        <div className="mb-6 text-blue-500">{icon}</div>
        <h4 className="text-xl font-semibold mb-3 text-white">{title}</h4>
        <p className="text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </GradientWrapper>
  );
}
