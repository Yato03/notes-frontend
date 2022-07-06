const deleteNote = (id) => {
  return fetch(`https://obscure-thicket-82350.herokuapp.com/api/notes/${id}`, {
    method: "DELETE"
  }).catch((err) => console.error(err));
};

export default deleteNote;
