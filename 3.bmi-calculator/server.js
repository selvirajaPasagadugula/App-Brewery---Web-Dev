const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3002;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  res.send(`Your BMI is: ${weight / (height * height)}`);
  console.log("Your BMI is: " + weight / (height * height));
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
