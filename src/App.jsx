import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Resume />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Steven Williams. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
