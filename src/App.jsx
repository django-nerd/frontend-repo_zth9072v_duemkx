import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  React.useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const headerOffset = 72; // approximate navbar height
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Steven Williams. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
