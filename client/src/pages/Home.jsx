function Home({ theme }) {
  return (
    <div
  className={`min-h-screen ${
    theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
  }`}
>
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-cyan-400 text-xl md:text-2xl font-semibold mb-6">
          Bienvenue sur mon portfolio
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Développeur web passionné par la création d'applications modernes
        </h1>

        <p className="text-slate-300 text-lg mb-8">
          Je conçois des interfaces modernes, des applications web dynamiques
          et des projets full stack avec React, Node.js et d'autres technologies.
        </p>

        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          <a
            href="/projets"
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-xl transition"
          >
            Voir mes projets
          </a>

          <a
            href="/CV-Elmehdi.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-xl transition"
          >
            Voir mon CV
          </a>

          <a
            href="/contact"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-xl transition"
          >
            Me contacter
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-semibold mb-3">Compétences</h2>
            <p className="text-slate-400">
              JavaScript, HTML, CSS, SQL, Python, PHP, Oracle
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-semibold mb-3">Projets</h2>
            <p className="text-slate-400">
              Portfolio, applications web, chat temps réel et API REST.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-semibold mb-3">Objectif</h2>
            <p className="text-slate-400">
              Construire des solutions modernes, propres et professionnelles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;