import { useState } from "react";

function ProjectItem({ project, onDelete, onEdit, onSelect }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(project.title);
  const [editDescription, setEditDescription] = useState(project.description);

  const saveChanges = () => {
    onEdit(project.id, editTitle, editDescription);
    setIsEditing(false);
  };

  return (
    <div className="project-item fade-in">
      {/* MAKE CARD CLICKABLE TO OPEN MODAL (but not when editing) */}
      {!isEditing && (
        <div onClick={() => onSelect(project)} className="click-overlay"></div>
      )}

      {project.image && (
        <img src={project.image} alt="" className="project-thumb" />
      )}

      {isEditing ? (
        <>
          <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
          <textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />

          <div className="button-row">
            <button className="save-btn" onClick={saveChanges}>Save</button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div className="button-row">
            <button className="edit-btn" onClick={(e) => { e.stopPropagation(); setIsEditing(true); }}>Edit</button>
            <button className="delete-btn" onClick={(e) => { e.stopPropagation(); onDelete(project.id); }}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectItem;
