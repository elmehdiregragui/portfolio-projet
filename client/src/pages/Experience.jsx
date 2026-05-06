function Experience({ theme }) {
  const experiences = [
    {
      id: 1,
      type: "Formation",
      title: "Techniques de l’informatique",
      place: "Collège LaSalle, Montréal",
      date: "2024 - 2026",
      description:
        "Formation en développement web, bases de données, programmation orientée objet, développement mobile et technologies full stack.",
    },
    
    
    {
      id: 4,
      type: "Projet académique",
      title: "Développement d’applications web et logicielles",
      place: "Projets personnels et scolaires",
      date: "2024 - 2026",
      description:
        "Réalisation de projets en React, PHP, Java, C#, SQL, Oracle, ASP.NET et développement d’interfaces modernes.",
    },
  ];

  return (
    <div
  className={`min-h-screen pt-28 px-6 ${
    theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
  }`}
>
      <div className="max-w-5xl mx-auto">
        <p className="text-cyan-400 text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
          Expérience / CV
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Mon parcours
        </h1>

        <p className="text-slate-300 text-lg leading-8 max-w-3xl mb-12">
          Voici un aperçu de mon parcours académique et de mes expériences.
          Cette section présente ma formation, mes expériences de travail et
          les projets qui m’ont permis de développer mes compétences techniques.
        </p>

        <div className="space-y-8">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                <div>
                  <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wide mb-2">
                    {item.type}
                  </p>
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="text-slate-400 mt-1">{item.place}</p>
                </div>

                <div className="text-slate-300 font-medium">
                  {item.date}
                </div>
              </div>

              <p className="text-slate-300 leading-7">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
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
      </div>
    </div>
  );
}

export default Experience;