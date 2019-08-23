require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const users = require('./users/users');
const occasions = require('./occasions/occasions');

const port = 3100;

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/users', users);
app.use('/api/occasions', occasions);

app.get('/api', (req, res) => {
  res.json('This app is gonna be awesomesauce!');
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.log(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
