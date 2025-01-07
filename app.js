const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter.js");

app.use("/", indexRouter);

app.get("/new", (req, res) => res.send("This is the new page"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`my mini message board project - listening on port ${PORT}`);
});
