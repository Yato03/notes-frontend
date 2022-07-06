import deleteNote from "./services/deleteNote";

export const Note = ({ note, notes, setNotes }) => {
  console.log(note);

  const handleOnClick = () => {
    deleteNote(note.id)
      .then((res) => {
        console.log(res);
        const newNotes = notes.filter((n) => n.id !== note.id);
        setNotes(newNotes);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="note">
      <div className="left-note">
        <div className="top-note">
          <h3>
            {note.id}.{note.content}
          </h3>
          <span>{note.important ? " important" : " not important"}</span>
        </div>
        <p>{note.date}</p>
      </div>
      <div className="div-button">
        <button onClick={handleOnClick}>Delete</button>
      </div>
    </div>
  );
};
