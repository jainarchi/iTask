# iTask - Todo Management App

A simple and elegant todo management application built with React. Manage your todos at one place with a clean, user-friendly interface made with Tailwind CSS.

## Features

- ✅ **Add Todos** - Easily add new tasks with a single click
- ✏️ **Edit Todos** - Modify existing todos whenever needed
- 🗑️ **Delete Todos** - Remove completed or unwanted tasks
- ✓ **Mark as Complete** - Check off completed tasks with a checkbox
- 👁️ **Toggle Visibility** - Show or hide finished todos
- 💾 **Persistent Storage** - All todos are saved to browser's local storage
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- **React** - UI library for building interactive components
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Icons** - Beautiful and customizable icons
- **UUID** - Unique ID generation for each todo
- **Local Storage API** - Browser-based data persistence

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd TodoAppReact
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - The app will typically run at `http://localhost:5173`

## Usage

### Adding a Todo
1. Type your todo text in the input field
2. Click the "Save" button (enabled when text is more than 3 characters)

### Editing a Todo
1. Click the edit icon (pencil icon) next to the todo
2. The todo will appear in the input field
3. Modify the text and click "Save" to update

### Deleting a Todo
1. Click the delete icon (trash icon) next to the todo
2. Confirm the deletion when prompted

### Marking Todos Complete
1. Check the checkbox next to any todo to mark it as complete
2. Completed todos will have a strikethrough effect

### Toggling Finished Todos
1. Use the "Show Finished" checkbox to toggle visibility of completed todos
2. Uncheck to hide completed tasks and focus on pending ones

## Project Structure

```
src/
├── App.jsx              # Main app component with todo logic
├── App.css              # App-specific styles
├── index.css            # Global styles with Tailwind imports
├── main.jsx             # React entry point
├── components/
│   └── Navbar.jsx       # Navigation bar component
└── assets/
    └── violet-bg.avif   # Background image
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Data Persistence

All todos are automatically saved to the browser's local storage. This means:
- Your todos persist even after closing the browser
- Data is stored locally on your device (not on any server)
- Clearing browser cache will delete all saved todos

## Browser Compatibility

Works on all modern browsers that support:
- ES6+ JavaScript
- Local Storage API
- CSS Grid and Flexbox

## Future Enhancements

- Priority levels for todos
- Due dates and reminders
- Categories or tags
- Dark/Light theme toggle
- Sync with cloud storage
- Mobile app version

## License

This project is open source and available for personal and educational use.

---

Built with ❤️ using React and Tailwind CSS