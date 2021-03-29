const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`running on ${port}`);
});

app.get("/", (req, res) => {
  res.json({
    yuhuuu: "prikitiw",
  });
});

app.use(
  express.urlencoded({
    extended: true,
  })
);
