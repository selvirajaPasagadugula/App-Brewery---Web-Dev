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
      res.write(
        "<h3>The temperature at Mumbai is:" + temp + " degrees Celcius.</h3>"
      );
      res.write("<h1>The weather seems: " + description + "</h1>");
      res.send();
      //   const object = {
      //     name: "Rajan",
      //     role: "Developer",
      //   };
      //   console.log(JSON.stringify(object));
    });
  });
});

app.listen(3004, () => {
  console.log("Server is running on port 3004");
});
