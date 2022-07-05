const getAllNotes = () => {
  return fetch("https://obscure-thicket-82350.herokuapp.com/api/notes")
    .then((data) => data.json())
    .catch((err) => console.error(err));
};

export default getAllNotes;
