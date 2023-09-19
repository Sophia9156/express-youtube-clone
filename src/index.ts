import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home!!");
});

app.listen(8080, () => {
  console.log("Server is up and running...🚀");
});
