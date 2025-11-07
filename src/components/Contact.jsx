import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-3xl font-semibold text-center"
        >
          Let’s build something great
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-10 max-w-2xl text-center text-white/80"
        >
          I turn detailed design into reliable UI code for web and mobile. Fast, accessible, and scalable.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = Object.fromEntries(new FormData(form));
            window.location.href = `mailto:hello@stevenwilliams.dev?subject=${encodeURIComponent(
              `Portfolio Inquiry: ${data.name || ''}`
            )}&body=${encodeURIComponent(`Name: ${data.name}\nCompany: ${data.company || ''}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`;
          }}
          className="mx-auto grid max-w-2xl grid-cols-1 gap-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-white/30"
            />
            <input
              name="company"
              type="text"
              placeholder="Company (optional)"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-white/30"
            />
          </div>
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-white/30"
          />
          <textarea
            name="message"
            required
            placeholder="Tell me about your project"
            rows={5}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-white/30"
          />
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs text-white/60">By submitting, an email draft opens with your message pre-filled.</p>
            <button
              type="submit"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-white/90"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
