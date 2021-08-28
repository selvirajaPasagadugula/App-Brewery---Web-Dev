const https = require("https");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=a175cd11d9413cded1d0938b2f2318c7&units=metric";
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
