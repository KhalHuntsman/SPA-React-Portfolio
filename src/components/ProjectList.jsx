import ProjectItem from "./ProjectItem";

// Add onSelect to pass click event to modal
function ProjectList({ projects, onDelete, onEdit, onSelect }) {
  return (
    <div className="project-list">
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((proj) => (
          <ProjectItem
            key={proj.id}
            project={proj}
            onDelete={onDelete}
            onEdit={onEdit}
            onSelect={onSelect} // PASS TO CHILD
          />
        ))
      )}
    </div>
  );
}

export default ProjectList;
