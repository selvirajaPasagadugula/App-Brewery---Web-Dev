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
      console.log(
        "Hey! the present temperature is: " +
          temp +
          " and the weather seems " +
          description
      );
      //   const object = {
      //     name: "Rajan",
      //     role: "Developer",
      //   };
      //   console.log(JSON.stringify(object));
    });
  });
  res.send("Server is runningggggggggggggggg!");
});

app.listen(3004, () => {
  console.log("Server is running on port 3004");
});
