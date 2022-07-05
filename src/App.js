import "./styles.css";
import { useState, useEffect } from "react";
import getAllNotes from "./services/getAllNotes";
import postNote from "./services/postNote";
import { Note } from "./Note";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    setLoading(true);
    getAllNotes().then((data) => {
      setNotes(data);
    });
    setLoading(false);
  }, []);

  const handleOnChangeNote = (e) => {
    setNewNote(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(newNote);
    postNote(newNote).then((res) => {
      setNotes(notes.concat(res));
    });
    setNewNote("");
  };

  return (
    <div className="App">
      <h1>Notes</h1>
      <form>
        <input
          type="text"
          placeholder="Type a note..."
          onChange={handleOnChangeNote}
          value={newNote}
        />
        <button onClick={handleOnSubmit}>New note</button>
      </form>
      {loading ? "Loading..." : notes.map((n) => <Note key={n.id} note={n} />)}
    </div>
  );
}
