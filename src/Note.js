export const Note = ({ note }) => {
  console.log(note.important);
  return (
    <div className="note">
      <h3>
        {note.id}.{note.content}
        <span align="right">
          {note.important ? " importante" : " poco importante"}
        </span>
      </h3>
      <p>{note.date}</p>
    </div>
  );
};
