'use strict';

const express = require('express');

// Constants specifying port # and host default at 0.0.0.0
const PORT = 8080;
const HOST = '0.0.0.0';

// Application - calls express and requests a string?
const app = express();
app.get("/", (req, res) => {
  res.send("Hello world\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);