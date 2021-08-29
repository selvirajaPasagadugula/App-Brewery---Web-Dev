const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let name1 = req.body.name1;
  let name2 = req.body.name2;
  let total_chars = name1.length + name2.length;
  console.log("Chars1 ", total_chars);
  for (let i = 0; i < name1.length; i++) {
    for (let j = 0; j < name2.length; j++) {
      if (name1[i] === name2[j]) {
        total_chars -= 2;
      }
    }
  }
  console.log("Total chars:", total_chars);
  let flames = ["F", "L", "A", "M", "E", "S"];

  while (flames.length > 1) {
    let index = (total_chars % flames.length) - 1;
    if (index >= 0) {
      let right = flames.slice(index + 1);
      let left = flames.slice(0, index);
      flames = left.concat(right);
    } else {
      flames = flames.slice(0, flames.length - 1);
    }
  }
  console.log("Logged:", flames);

  if (flames.length === 1) {
    switch (flames[0]) {
      case "F":
        res.sendFile(__dirname + "/family.html");
        break;
      case "L":
        res.sendFile(__dirname + "/love.html");
        break;
      case "A":
        res.sendFile(__dirname + "/affair.html");
        break;
      case "M":
        res.sendFile(__dirname + "/marriage.html");
        break;
      case "E":
        res.sendFile(__dirname + "/enemy.html");
        break;
      case "S":
        res.sendFile(__dirname + "/sister.html");
        break;
      default:
        res.sendFile(__dirname + "/failure.html");
    }
  }
});

app.get("/check-again", (req, res) => {
  res.redirect("/");
});

app.listen(3006, () => {
  console.log("Server is running on PORT: 3006");
});
