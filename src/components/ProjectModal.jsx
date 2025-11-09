import React from "react";

// Modal displays the selected project in larger detail
function ProjectModal({ project, onClose }) {
  if (!project) return null; // If no project selected, render nothing

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Stop click events from closing modal when clicking inside the box */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {project.image && (
          <img src={project.image} alt="" className="modal-image" />
        )}

        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <button className="close-modal-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ProjectModal;
