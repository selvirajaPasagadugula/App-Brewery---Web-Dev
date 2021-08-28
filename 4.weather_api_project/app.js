const https = require("https");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const city = req.body.cityName;
  const apiKey = "a175cd11d9413cded1d0938b2f2318c7";
  const units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=" +
    units;
  https.get(url, (response) => {
    console.log(response.statusCode);
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.send(
        "<h3>The weather seems " +
          description +
          "</h3><h1>The temperature of Mumbai is " +
          temp +
          "</h1><img src=" +
          imgURL +
          ">"
      );
    });
  });
});

app.listen(3004, () => {
  console.log("Server is running on port 3004");
});
