// Import Express.js
const express = require("express");
// Initialize an instance of Express.js
const app = express();
// require the htmlroutes file and declare the route to use
const html = require("./routes/htmlRoutes");
const api = require("./routes/apiRoutes");

// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3001;

// Static middleware pointing to the public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use ("/api", api);
app.use("/", html)

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
