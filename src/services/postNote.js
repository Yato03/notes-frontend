const postNote = (note) => {
  return fetch("https://obscure-thicket-82350.herokuapp.com/api/notes", {
    method: "POST",
    body: JSON.stringify({
      important: true,
      content: note
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then((response) => response.json());
};

export default postNote;
