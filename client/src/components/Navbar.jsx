import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  const navBg =
    theme === "dark"
      ? "bg-slate-900 text-white"
      : "bg-white text-slate-900 border-b border-slate-200";

  return (
    <nav className={`${navBg} fixed w-full top-0 z-50 shadow`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Portfolio</h1>

        <div className="hidden md:flex gap-6 items-center">
          <Link to="/">Accueil</Link>
          <Link to="/apropos">À propos</Link>
          <Link to="/projets">Projets</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/competences">Compétences</Link>
          <Link to="/experience">Expériences</Link>

          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition"
          >
            {theme === "dark" ? "☀️ Clair" : "🌙 Sombre"}
          </button>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div
          className={`md:hidden px-6 pb-4 flex flex-col gap-3 ${
            theme === "dark"
              ? "bg-slate-900 text-white"
              : "bg-white text-slate-900"
          }`}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            Accueil
          </Link>
          <Link to="/apropos" onClick={() => setOpen(false)}>
            À propos
          </Link>
          <Link to="/projets" onClick={() => setOpen(false)}>
            Projets
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link to="/competences" onClick={() => setOpen(false)}>
            Compétences
          </Link>
          <Link to="/experience" onClick={() => setOpen(false)}>
            Expériences
          </Link>

          <button
            onClick={toggleTheme}
            className="mt-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition"
          >
            {theme === "dark" ? "☀️ Clair" : "🌙 Sombre"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;