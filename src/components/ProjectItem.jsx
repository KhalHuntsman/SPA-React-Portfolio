import { useState } from "react";

// The ProjectItem component represents one individual project card.
// It supports: viewing, editing, deleting, and opening the modal.
function ProjectItem({ project, onDelete, onEdit, onSelect }) {

  // Controls whether this card is currently being edited inline
  const [isEditing, setIsEditing] = useState(false);

  // Temporary input values while editing (not saved until Save is clicked)
  const [editTitle, setEditTitle] = useState(project.title);
  const [editDescription, setEditDescription] = useState(project.description);

  // Handler to save the edited values
  const saveChanges = () => {
    onEdit(project.id, editTitle, editDescription); // Calls edit function from App.jsx
    setIsEditing(false); // Exit edit mode
  };

  return (
    // Each project appears as a card with fade-in animation
    <div className="project-item fade-in">

      {/* 
        If not currently editing, clicking the card should open the modal.
        We use an invisible overlay to catch clicks so the edit button click doesn't trigger modal open.
      */}
      {!isEditing && (
        <div onClick={() => onSelect(project)} className="click-overlay"></div>
      )}

      {/* Display project image only if one exists */}
      {project.image && (
        <img src={project.image} alt="" className="project-thumb" />
      )}

      {/* If editing mode is active, show form inputs instead of text */}
      {isEditing ? (
        <>
          {/* Title field while editing */}
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />

          {/* Description field while editing */}
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />

          {/* Buttons shown during editing */}
          <div className="button-row">
            <button className="save-btn" onClick={saveChanges}>Save</button>
            <button
              className="cancel-btn"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        // Standard card view (not currently editing)
        <>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          {/* Buttons for editing or deleting */}
          <div className="button-row">

            {/* Edit button: stopPropagation so clicking it does NOT open modal */}
            <button
              className="edit-btn"
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal from opening
                setIsEditing(true);  // Switch to edit mode
              }}
            >
              Edit
            </button>

            {/* Delete button: also stops modal click */}
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal from opening when deleting
                onDelete(project.id); // Call delete handler passed from App.jsx
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectItem;
