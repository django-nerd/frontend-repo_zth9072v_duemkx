import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Monitor, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Mobile UI → React Native',
    description:
      'Converted a complex Figma design system into reusable React Native components with theme tokens and accessibility baked in.',
    stack: ['React Native', 'TypeScript', 'Reanimated', 'Zustand'],
    image:
      'https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'E-commerce Web UI → Next.js',
    description:
      'Implemented pixel-perfect storefront from design specs with dynamic routing, server-side rendering, and edge caching.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'Vercel'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Design System to Code',
    description:
      'Codified UI kit into a scalable component library with tokens, docs, testing, and story-driven development.',
    stack: ['Storybook', 'Radix UI', 'Jest', 'Chromatic'],
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Marketing Site Revamp',
    description:
      'Rebuilt marketing stack with accessibility-first components, reducing CLS and increasing conversions by 12%.',
    stack: ['React', 'TypeScript', 'A11y', 'Analytics'],
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Mobile Design System',
    description:
      'Established mobile-first tokens and patterns across iOS/Android apps with unified theming.',
    stack: ['Design Tokens', 'React Native', 'Figma'],
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Dashboard Performance Tuning',
    description:
      'Cut bundle size by 28% via code-splitting, tree-shaking, and asset pipeline optimization.',
    stack: ['Webpack', 'Code Split', 'Perf'],
    image:
      'https://images.unsplash.com/photo-1556157381-36f3e3a00b31?q=80&w=1200&auto=format&fit=crop',
  },
];

const iconFor = (title) => {
  if (title.toLowerCase().includes('mobile')) return <Smartphone className="text-white/80" size={20} />;
  if (title.toLowerCase().includes('web')) return <Monitor className="text-white/80" size={20} />;
  if (title.toLowerCase().includes('system')) return <Layers className="text-white/80" size={20} />;
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
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  {iconFor(p.title)}
                  <h3 className="text-lg font-medium">{p.title}</h3>
                </div>
                <p className="mb-3 text-sm text-white/80">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
