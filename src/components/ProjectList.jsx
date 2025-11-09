import ProjectItem from "./ProjectItem"; // Import individual project card component

// The ProjectList component receives:
// - projects: an array of project objects
// - onDelete: callback for removing a project
// - onEdit: callback for editing a project
// - onSelect: callback used to open the project modal
function ProjectList({ projects, onDelete, onEdit, onSelect }) {

  return (
    <div className="project-list">
      {/* If no projects exist, show a simple message */}
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        // Otherwise, loop through all projects and render a ProjectItem for each
        projects.map((proj) => (
          <ProjectItem
            key={proj.id}     // Unique key required for React rendering
            project={proj}     // Pass full project object to child
            onDelete={onDelete} // Function to remove project (passed to child)
            onEdit={onEdit}     // Function to edit project (passed to child)
            onSelect={onSelect} // Function to open modal when clicked
          />
        ))
      )}
    </div>
  );
}

export default ProjectList;
