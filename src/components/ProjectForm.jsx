import { useState } from "react";

// The ProjectForm component handles collecting user input
// and sending a new project object back up to App.jsx.
function ProjectForm({ onAddProject }) {

  // Local state for form input values
  const [title, setTitle] = useState("");           // Stores project title text
  const [description, setDescription] = useState(""); // Stores project description text
  const [image, setImage] = useState(null);         // Stores optional project thumbnail preview URL

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on submit

    // Do not add a project if required fields are empty
    if (!title || !description) return;

    // Construct a project object to send back to parent state
    // Assigns a unique ID so the project can be edited or deleted later
    onAddProject({
      id: crypto.randomUUID(), // Generates a unique identifier
      title,
      description,
      image,
    });

    // Clear form fields after submission
    setTitle("");
    setDescription("");
    setImage(null);
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      {/* Title Input */}
      <label>Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update state on every keystroke
      />

      {/* Description Input */}
      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Image Upload (Optional) */}
      <label>Image (optional)</label>
      <input
        type="file"
        accept="image/*" // Restricts uploads to image types only
        onChange={(e) =>
          setImage(URL.createObjectURL(e.target.files[0])) // Creates a temporary preview URL
        }
      />

      {/* Submit Button */}
      <button type="submit">Add</button>
    </form>
  );
}

export default ProjectForm;
