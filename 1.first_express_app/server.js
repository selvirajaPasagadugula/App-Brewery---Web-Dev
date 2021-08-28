const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome!, check contact and about routes!!!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>Contact Page!</h2><p>Email: 18a91a0594@aec.edu.in</p>");
});

app.get("/about", (req, res) => {
  res.send("<h2>About Page!</h2><p>I'm a Web Developer and Programmer!</p>");
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
