const express = require('express');
const bodyParser = require('body-parser');
const { get } = require('axios');
const path = require('path');
const API = require('./routes/api');


const PORT = 80;
const headers = { 'Content-type': 'application/json' };
const app = express();

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/api/posts', API.handle(express))
  .get(['/', '/posts/*'], (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  })
  .get('/dist/main.bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/main.bundle.js'));
  })
  .get('/dist/ReactToastify.min.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/ReactToastify.min.css'));
  })
  .use(r => r.res.status(404).end('Still not here, sorry!'))
  .use((e, r, res, n) => res.status(500).end(`Error: ${e}`))
  .listen(process.env.PORT || PORT, () => console.log(process.pid));
