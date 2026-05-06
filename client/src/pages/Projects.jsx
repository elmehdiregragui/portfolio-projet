import { useEffect, useState } from "react";

function Projects({ theme }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "https://portfolio-projet-1.onrender.com";

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des projets");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Impossible de charger les projets.");
        setLoading(false);
      });
  }, []);

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

        {loading && (
          <p className="text-slate-400 text-lg">
            Chargement des projets...
          </p>
        )}

        {error && (
          <p className="text-red-400 text-lg">
            {error}
          </p>
        )}

        {!loading && !error && (
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
        )}
      </div>
    </div>
  );
}

export default Projects;