import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Monitor } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Mobile UI → React Native',
    description: 'Converted a complex Figma design system into reusable React Native components with theme tokens and accessibility baked in.',
    stack: ['React Native', 'TypeScript', 'Reanimated', 'Zustand'],
  },
  {
    title: 'E-commerce Web UI → Next.js',
    description: 'Implemented pixel-perfect storefront from design specs with dynamic routing, server-side rendering, and edge caching.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'Vercel'],
  },
  {
    title: 'Design System to Code',
    description: 'Codified UI kit into a scalable component library with tokens, docs, testing, and story-driven development.',
    stack: ['Storybook', 'Radix UI', 'Jest', 'Chromatic'],
  },
];

const iconFor = (title) => {
  if (title.includes('Mobile')) return <Smartphone className="text-white/80" size={20} />;
  if (title.includes('Web')) return <Monitor className="text-white/80" size={20} />;
  return <Code className="text-white/80" size={20} />;
};

const Projects = () => {
  return (
    <section id="projects" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-3xl font-semibold"
        >
          Selected Work
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-3 flex items-center gap-2">
                {iconFor(p.title)}
                <h3 className="text-lg font-medium">{p.title}</h3>
              </div>
              <p className="mb-3 text-sm text-white/80">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
