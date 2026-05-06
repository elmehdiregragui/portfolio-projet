function Footer() {
  return (
    <footer className="bg-slate-900 text-white text-center py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4">
          © 2026 Portfolio - Elmehdi Regragui
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/elmehdiregragui"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            GitHub
          </a>

          <a
            href="/CV-Elmehdi.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            CV
          </a>

          <a
            href="/contact"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;