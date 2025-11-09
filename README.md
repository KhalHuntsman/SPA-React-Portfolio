# Personal Project Showcase Application

This project is a single-page application (SPA) built with React and Vite. It provides an interactive platform for displaying a collection of projects in a portfolio-style format. Users can add new projects, edit existing ones, delete projects, search through entries, and view project details in a modal display. The application includes responsive design to ensure usability across different screen sizes and persists project data in the browser using localStorage.

---

## Purpose

The objective of this application is to offer a modern and user-friendly interface for showcasing personal or organizational projects. It is intended for use by individuals, creative agencies, or developers who want to maintain a dynamic and maintainable project portfolio that can be easily updated as new work is completed.

---

## Features

- Add new projects with a title, description, and optional image.
- Edit project information directly from the project display.
- Delete projects from the portfolio.
- Live search feature that filters projects as the user types.
- Project data is saved to localStorage so that information persists across browser sessions.
- Clicking a project opens a modal window showing project details in a larger, focused view.
- A theme toggle allows switching between light and dark visual modes, and theme preference is saved.
- Responsive layout with multi-column grid on wider screens and stacked layout on mobile.

---

## Component Structure

src/
├─ App.jsx // Root component managing state, layout, and data persistence
├─ App.css // Application styling and layout rules
├─ index.css // Global stylesheet and resets
└─ components/
├─ SearchBar.jsx // Search input for filtering projects
├─ ProjectForm.jsx // Form used to add new projects
├─ ProjectList.jsx // Renders the overall list of project entries
├─ ProjectItem.jsx // Represents a single project card with actions
└─ ProjectModal.jsx // Displays full project details in a modal overlay


This structure promotes separation of concerns and reusability. State is maintained at the top level and passed to child components via props.

---

## State Management

State is maintained primarily in `App.jsx`, which controls:
- The array of project objects
- The search term
- The currently selected project for modal viewing
- The active theme mode (light or dark)

State updates occur through controlled handlers passed to child components. `useEffect` is used to persist the project list and theme selection into `localStorage`.

---

## Styling and Responsiveness

The application is styled using standard CSS. The layout adjusts based on available screen width:
- On desktop screens, the project form appears on the left and the project grid appears on the right in multiple columns.
- On smaller screens, the layout stacks vertically for readability and accessibility.

Projects animate into view with a fade-and-slide motion, and hover styling provides visual feedback for interactive elements.

---

## Installation and Running the Application

1. Install dependencies:

2. Start the development server:

3. Open the application in a browser:

---

## Technologies Used

- React (component-based UI development)
- Vite (development tooling and build system)
- JavaScript (application logic and state management)
- CSS (visual layout and styling)
- localStorage (client-side data persistence)

---

## Summary

This project demonstrates effective use of React component structure, state management, event handling, and prop passing. The interface is functional, intuitive, and responsive, providing a polished user experience that aligns with the requirements of a modern single-page application. The inclusion of data persistence and modal interaction enhances usability and reflects thoughtful design choices.