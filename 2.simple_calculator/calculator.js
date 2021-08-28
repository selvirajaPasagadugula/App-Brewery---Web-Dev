const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3001;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  // We can also assign these num values to variables and then sum and display them!!!
  const num1 = parseInt(req.body.num1);
  const num2 = parstInt(req.body.num2);
  console.log(`Sum is:${num1 + num2}`);
  res.send(`Sum is:${num1 + num2}`);
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
