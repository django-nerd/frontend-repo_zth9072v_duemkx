import React from 'react';
import { motion } from 'framer-motion';

// Harvard-style international résumé content for Steven Williams
const Resume = () => {
  return (
    <section id="resume" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-3xl font-semibold"
        >
          Résumé (Harvard format)
        </motion.h2>

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Steven Williams</h3>
          <p className="text-white/80">Frontend Developer — UI Design to Production Code</p>
          <p className="text-sm text-white/70">San Francisco, CA · hello@stevenwilliams.dev · stevenwilliams.dev · LinkedIn: /in/stevenwilliams</p>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h4 className="mb-3 text-xl font-semibold">Education</h4>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium">B.S., Computer Science</p>
              <p className="text-sm text-white/80">University of California, Berkeley</p>
            </div>
            <p className="text-sm text-white/70">2014 — 2018</p>
          </div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
            <li>Focus: Human-Computer Interaction, Software Engineering</li>
            <li>Honors: Dean’s List (4x)</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h4 className="mb-3 text-xl font-semibold">Experience</h4>

          <div className="mb-5">
            <div className="flex items-start justify-between gap-4">
              <p className="font-medium">Senior Frontend Engineer, Pixelcraft Labs</p>
              <p className="text-sm text-white/70">2021 — Present</p>
            </div>
            <p className="text-sm text-white/70">San Francisco, CA</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
              <li>Translated Figma design systems into modular React component libraries increasing delivery speed by 40%.</li>
              <li>Led accessibility audits and implemented WCAG 2.2 AA compliance across web properties.</li>
              <li>Built motion guidelines and shipped micro-interactions with Framer Motion improving engagement by 18%.</li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex items-start justify-between gap-4">
              <p className="font-medium">Frontend Engineer, CommerceCo</p>
              <p className="text-sm text-white/70">2018 — 2021</p>
            </div>
            <p className="text-sm text-white/70">Remote</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
              <li>Implemented Next.js storefront from design specs, improving CLS and LCP to Core Web Vitals green.</li>
              <li>Established design tokens and dark mode strategy shared across 5 product teams.</li>
              <li>Mentored 4 engineers on UI architecture, testing, and performance budgets.</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h4 className="mb-3 text-xl font-semibold">Skills</h4>
          <p className="text-sm text-white/80">
            React, Next.js, TypeScript, React Native, Tailwind CSS, Radix UI, Framer Motion, Jest, Storybook, Web Accessibility (WCAG), Performance Optimization, Design Systems, Figma to Code
          </p>
        </div>

        {/* Projects/Impact Highlights */}
        <div className="mb-8">
          <h4 className="mb-3 text-xl font-semibold">Selected Impact</h4>
          <ul className="list-disc space-y-1 pl-5 text-sm text-white/80">
            <li>Reduced time-to-ship new UI by 40% via reusable component kits and documentation.</li>
            <li>Improved conversion by 12% through A/B tested UX refinements and motion design.</li>
            <li>Cut bundle size by 28% by code-splitting, tree-shaking, and asset pipeline optimization.</li>
          </ul>
        </div>

        {/* Footer */}
        <p className="text-xs text-white/60">References available upon request.</p>
      </div>
    </section>
  );
};

export default Resume;
