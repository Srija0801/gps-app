const express = require("express");
const app = express();

// Replace with your classroom GPS coordinates
const latitude = 9.5916;
const longitude = 76.5222;

app.get("/", (req, res) => {
  res.json({
    location: "Classroom",
    latitude: latitude,
    longitude: longitude
  });
});

app.listen(3000, () => {
  console.log("GPS service running on port 3000");
});
