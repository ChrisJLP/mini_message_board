const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("layout", {
    title: "Mini Messageboard",
    body: "index",
    data: { messages: messages },
  });
});

indexRouter.get("/new", (req, res) => {
  res.render("layout", {
    title: "New message",
    body: "form",
    data: {},
  });
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
