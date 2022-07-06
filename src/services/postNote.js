const postNote = (note, important) => {
  return fetch("https://obscure-thicket-82350.herokuapp.com/api/notes", {
    method: "POST",
    body: JSON.stringify({
      important: important || false,
      content: note
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then((response) => response.json());
};

export default postNote;
