import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Résumé' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onHashClick = () => setOpen(false);
    window.addEventListener('hashchange', onHashClick);
    return () => window.removeEventListener('hashchange', onHashClick);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-sm font-semibold tracking-wide text-white">SW</a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white">
              {item.label}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-3">
            <a href="/steven-williams-resume.pdf" download className="text-xs font-medium text-white/80 hover:text-white">
              Download PDF
            </a>
            <a href="mailto:hello@stevenwilliams.dev" aria-label="Email" className="text-white/70 hover:text-white">
              <Mail size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/70 hover:text-white">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-white">
              <Linkedin size={18} />
            </a>
          </div>
        </nav>

        <button onClick={() => setOpen((o) => !o)} className="md:hidden text-white" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-white/80 hover:text-white">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="/steven-williams-resume.pdf" download className="text-white/80 hover:text-white">Download PDF</a>
              <a href="mailto:hello@stevenwilliams.dev" className="text-white/70 hover:text-white">Email</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
