const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("This is my mini message board"));

app.get("/new", (req, res) => res.send("This is the new page"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`my mini message board project - listening on port ${PORT}`);
});
