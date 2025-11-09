import { useState, useEffect } from "react";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import ProjectModal from "./components/ProjectModal";
import "./App.css";

function App() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (project) => {
    setProjects([project, ...projects]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const editProject = (id, newTitle, newDescription) => {
    setProjects(
      projects.map((p) =>
        p.id === id ? { ...p, title: newTitle, description: newDescription } : p
      )
    );
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app-wrapper">
      <div className="top-bar">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button
          className="theme-toggle-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="content-layout">
        <ProjectForm onAddProject={addProject} />
        <ProjectList
          projects={filteredProjects}
          onDelete={deleteProject}
          onEdit={editProject}
          onSelect={setSelectedProject}
        />
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
