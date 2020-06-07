const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const HomePage = require('./client/pages/homepage/homepage.page').default;

const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<HomePage />);

  res.send(content);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
