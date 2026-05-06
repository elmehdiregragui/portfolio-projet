function Skills({ theme }) {
  const skills = [
    { name: "Java", level: "90%" },
    { name: "C#", level: "90%" },
    { name: "Python", level: "80%" },
    { name: "SQL", level: "90%" },
    { name: "PHP", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "HTML / CSS", level: "95%" },
    { name: "ASP.NET", level: "90%" },
    { name: "Oracle", level: "85%" },
    { name: "MySQL", level: "90%" },
    { name: "SQL Server", level: "95%" }
  ];

  return (
    <div
  className={`min-h-screen pt-28 px-6 ${
    theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
  }`}
>
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-cyan-400 mb-6">
  Compétences technique
</h1>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">
                <div
                  className="bg-cyan-400 h-3 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>


        {/* compétences personnelles */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-cyan-400 mb-6">
  Compétences personnelles
</h2>
          <ul className="list-disc pl-8 text-gray-300 space-y-3 text-xl">
            <li>Gestion du temps</li>
            <li>Travail d’équipe</li>
            <li>Résolution de problèmes</li>
            <li>Organisation</li>
            <li>Communication</li>
          </ul>
        </div>

        {/* langues */}
        <div>
          <h2 className="text-4xl font-bold text-cyan-400 mb-6">
  Langues
</h2>
          <ul className="list-disc pl-8 text-gray-300 space-y-3 text-xl">
  <li>Français</li>
  <li>Anglais</li>
</ul>
        </div>

      </div>
    </div>
  );
}

export default Skills;