function About({ theme }) {
  return (
    
    <div
  className={`min-h-screen pt-28 px-6 ${
    theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
  }`}
>
  
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8">
          À propos
        </h1>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
          <p className="text-lg text-slate-300 leading-8">
            Je suis un étudiant en informatique passionné par le développement
            web et la création d’applications modernes. J’aime construire des
            interfaces propres, simples et professionnelles.
          </p>

          <p className="text-lg text-slate-300 leading-8">
            Je travaille avec plusieurs technologies comme, JavaScript,
            HTML, CSS et SQL . À travers mes projets, je cherche
            toujours à améliorer mon niveau technique et ma façon de structurer
            le code.
          </p>

          <p className="text-lg text-slate-300 leading-8">
            Mon objectif est de développer des projets utiles, modernes et bien
            organisés, tout en continuant à progresser comme développeur full stack.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;