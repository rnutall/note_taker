const api = require("express").Router();
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');

api.get("/notes", (req, res) => {
  // READ THE NOTE FROM THE DB.JSON FILE
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST request to save new notes
api.post("/notes", (req, res) => {
    const newNote = {
        title: req.body.title,
        text: req.body.text
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
});

api.delete('',(req, res) => {
    
})

module.exports = api;
