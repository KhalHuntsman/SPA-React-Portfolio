import React from "react";

// The ProjectModal component displays a selected project in a larger overlay view.
// It only appears when `project` is not null.
function ProjectModal({ project, onClose }) {

  // If no project is selected, do not render the modal at all
  if (!project) return null;

  return (
    // Modal backdrop: clicking outside modal content closes the modal
    <div className="modal-overlay" onClick={onClose}>

      {/* 
        Inner modal box: stopping click propagation prevents closing the modal
        when the user interacts inside the modal.
      */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        {/* Show image only if the project has one uploaded */}
        {project.image && (
          <img src={project.image} alt="" className="modal-image" />
        )}

        {/* Display project text content */}
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        {/* Close button inside modal */}
        <button className="close-modal-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ProjectModal;
