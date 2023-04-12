// Import Express.js
const express = require('express');

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const api = require("path");

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/notes", (req, res) => 
 res.sendFile(path.join)(__dirname, "public/notes.html"));
app.get("api/notes", (req, res) =>
res.sendFile(path.join(__dirname, "db/db.json")));

// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

app.get('api/notes', (req, res) => {
    const getNote = json.parse(fs.readFile())
res.writeFile(path)});
app.get('/notes', (req, res) => 
res.readFile(termData));
//get route the returns a specific term
app.get('/api/notes'), (req, res) => {
    res.json(`${req.method} request received`);
}

// POST request to save new notes
app.post('/api/notes', (req, res) => {
    const data = json.parse(fs.readFile("db/db/json", "utf8"));
    const newNotes = {
        id: "",
        title: req.body.title, 
        text: req.body.text
        
    }
        data.push(newNotes);
        fs.writeToFile("db/db.json", json.sringify(data, null, 002));
            res.json(data);
    });
    
  // Delete request
app.delete('/api/notes', (req, res) => {
    // Let the client know that their POST request was received
    res.json(`${req.method} request received`);
  

  app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
  );
  
    // Show the user agent information in the terminal
    console.info(req.rawHeaders);
  
    // Log our request to the terminal
    console.info(`${req.method} request received`);
  });
  
  app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
  );
  