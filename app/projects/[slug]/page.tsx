import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Dashboard",
    desc: "Admin dashboard with real-time analytics.",
    image: "/assets/projects/quickcart.png",
    tech: ["React", "Next.js", "Tailwind", "Chart.js"],
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio with smooth UI animations.",
    image: "/assets/projects/hero.png",
    tech: ["Next.js", "Framer Motion", "TS"],
  },
  {
    title: "Restaurant App",
    desc: "Dynamic restaurant ordering app with API integration.",
    image: "/assets/projects/smarthours.png",
    tech: ["React", "Node.js", "MongoDB"],
  },
];

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ← IMPORTANT FIX
  const project = projects[Number(id)];

  if (!project)
    return (
      <h1 className="p-20 text-center text-xl">Project Not Found</h1>
    );

  return (
    <section className="py-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="text-gray-600 mt-4">{project.desc}</p>

      <div className="mt-10 w-full h-96 relative shadow-xl rounded-xl overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
