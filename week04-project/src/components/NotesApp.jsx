import { useEffect, useState } from "react";

function NotesApp() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
  const savedNotes = localStorage.getItem("notes");

  if (savedNotes) {
    setNotes(JSON.parse(savedNotes));
  }
}, []);

useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes));
}, [notes]);

  function addNote() {
    if (note.trim() === "") return;

    const newNote = {
      id: Date.now(),
      text: note
    };

    setNotes([...notes, newNote]);
    setNote("");
  }
function editNote(id) {
  const newText = prompt("Edit your note:");

  if (newText === null || newText.trim() === "") {
    return;
  }

  setNotes(
    notes.map((item) =>
      item.id === id
        ? { ...item, text: newText }
        : item
    )
  );
}

  function deleteNote(id) {
    setNotes(notes.filter((item) => item.id !== id));
  }

  return (
    <div className="notes-app">
      <h2>My Notes 📝</h2>
<input
  type="text"
  placeholder="Search notes..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="search-input"
/>
      <div className="note-input">
        <input
          type="text"
          placeholder="Write a note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button onClick={addNote}>Add Note</button>
      </div>

      <div className="notes-list">
        {notes
  .filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  )
  .map((item) => (
        
                  <div className="note-card" key={item.id}>
            <span>{item.text}</span>

            <button onClick={() => editNote(item.id)}>
              ✏️
            </button>

            <button onClick={() => deleteNote(item.id)}>
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesApp;