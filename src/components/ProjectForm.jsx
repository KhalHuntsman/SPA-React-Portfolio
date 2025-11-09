import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    // Create project object with a unique ID
    onAddProject({
      id: crypto.randomUUID(),
      title,
      description,
      image,
    });

    setTitle("");
    setDescription("");
    setImage(null);
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <label>Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Description</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

      <label>Image (optional)</label>
      <input type="file" accept="image/*" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />

      <button type="submit">Add</button>
    </form>
  );
}

export default ProjectForm;
