// Importing express module
const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Handling GET / request
app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

// Handling GET /hello request
app.get("/hello", (req, res, next) => {
  res.send("This is the hello response");
});

// Server setup
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
//