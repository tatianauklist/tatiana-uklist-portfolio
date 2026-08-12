import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Projects — Your Name',
};

const projects = [
  {
    title: 'Project One',
    description: 'A short description of what this project does and why it matters.',
    href: 'https://github.com/your-username/project-one',
    tags: ['JavaScript', 'Next.js'],
  },
  {
    title: 'Project Two',
    description: 'A short description of what this project does and why it matters.',
    href: 'https://github.com/your-username/project-two',
    tags: ['Node.js', 'Azure'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-bold text-slate-900">Projects</h1>
      <p className="mt-2 text-slate-600">A few things I've built.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
