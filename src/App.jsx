// Import React hooks and required components
import { useState, useEffect } from "react";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import ProjectModal from "./components/ProjectModal";
import "./App.css"; // Global styling

function App() {

  // PROJECT STATE:
  // Load any saved projects from localStorage when the app starts.
  // If none exist, initialize with an empty array.
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [];
  });

  // Whenever the projects array changes, update localStorage
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]); // Dependency ensures this runs only when `projects` updates


  // THEME STATE:
  // Load the stored theme or default to "dark" mode.
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // Apply theme to the `body` element & save preference to localStorage
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  // SEARCH STATE:
  // Stores the current text typed into the search bar.
  const [searchTerm, setSearchTerm] = useState("");


  // Add a new project to the beginning of the list
  const addProject = (project) => {
    setProjects([project, ...projects]);
  };

  // Remove project by ID
  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  // Update project content by matching ID
  const editProject = (id, newTitle, newDescription) => {
    setProjects(
      projects.map((p) =>
        p.id === id ? { ...p, title: newTitle, description: newDescription } : p
      )
    );
  };

  // Return only projects whose title matches the search input (case-insensitive)
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // MODAL STATE:
  // Tracks which project is open in the modal (null = none open)
  const [selectedProject, setSelectedProject] = useState(null);


  return (
    <div className="app-wrapper">

      {/* TOP BAR: Search Input + Theme Toggle Button */}
      <div className="top-bar">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Button toggles theme between light and dark */}
        <button
          className="theme-toggle-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>


      {/* MAIN PAGE LAYOUT:
          Left Side → Project Form
          Right Side → Project Grid */}
      <div className="content-layout">
        <ProjectForm onAddProject={addProject} />

        <ProjectList
          projects={filteredProjects}
          onDelete={deleteProject}
          onEdit={editProject}
          onSelect={setSelectedProject} // Opens the modal when clicked
        />
      </div>


      {/* MODAL: Only renders when selectedProject is not null */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)} // Close modal handler
      />
    </div>
  );
}

export default App; // Export component so it can be used elsewhere
