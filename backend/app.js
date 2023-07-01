const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post Added Successfully",
  });
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fafafafh0001",
      title: "First Post Server",
      content: "First Post Content coming from server",
    },
    {
      id: "fafafafh0002",
      title: "Second Post Server",
      content: "Second Post Content coming from server",
    },
    {
      id: "fafafafh0003",
      title: "Third Post Server",
      content: "Third Post Content coming from server",
    },
    {
      id: "fafafafh0004",
      title: "Fourth Post Server",
      content: "Fourth Post Content coming from server",
    },
    {
      id: "fafafafh0005",
      title: "Fifth Post Server",
      content: "Fifth Post Content coming from server",
    },
  ];
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts,
  });
});

module.exports = app;
