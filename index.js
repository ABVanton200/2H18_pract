const express = require('express');
const bodyParser = require('body-parser');
const { get } = require('axios');
const API = require('./routes/api');


const PORT = 80;
const headers = { 'Content-type': 'application/json' };
const app = express();


app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/api/posts', API.handle(express))
  .get((req, res) => {
    res.status(404).end('Страница не существует');
  })
  .listen(process.env.PORT || PORT);
