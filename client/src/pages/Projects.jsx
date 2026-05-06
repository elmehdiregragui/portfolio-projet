function Projects({ theme }) {
  const projects = [
    {
      id: 1,
      title: "Animal Care",
      image: "/images/animalcare.png",
      description:
        "Application de gestion de clinique vétérinaire permettant de gérer les rendez-vous, les vétérinaires, les propriétaires et les animaux.",
      github: "https://github.com/elmehdiregragui/AnimalCare",
    },

    {
      id: 2,
      title: "Hotel Reservation System",
      image: "/images/hotel.png",
      description:
        "Application web de réservation d’hôtel permettant de gérer les chambres, les réservations et les utilisateurs.",
      github:
        "https://github.com/elmehdiregragui/hotel-reservation-system",
    },

    {
      id: 3,
      title: "Country Explorer",
      image: "/images/country.png",
      description:
        "Application permettant d’explorer les pays et d’afficher leurs informations de manière simple et visuelle.",
      github: "https://github.com/elmehdiregragui/country-explorer",
    },

    {
      id: 4,
      title: "Smart Parking App",
      image: "/images/parking.png",
      description:
        "Application mobile pour gérer des places de stationnement et visualiser les emplacements disponibles.",
      github: "https://github.com/elmehdiregragui/SmartParking",
    },

    {
      id: 5,
      title: "Memory Color",
      image: "/images/memory.png",
      description:
        "Jeu interactif développé en .NET MAUI et basé sur la mémoire visuelle et la reproduction de séquences de couleurs.",
      github: "https://github.com/elmehdiregragui/memory-color",
    },

    {
      id: 6,
      title: "Devinette PHP",
      image: "/images/devinette.png",
      description:
        "Application web PHP permettant de jouer à un jeu de devinette avec base de données.",
      github: "https://github.com/elmehdiregragui/Devinette",
    },
  ];

  return (
    <div
      className={`min-h-screen pt-28 px-6 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-10">
          Projets
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover rounded-xl mb-5"
              />

              <h2 className="text-2xl font-semibold mb-4">
                {project.title}
              </h2>

              <p className="text-slate-300 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-4 py-2 rounded-xl transition"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;