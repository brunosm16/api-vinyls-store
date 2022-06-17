const express = require('express');

const morgan = require('morgan');

const developmentEnv = process.env.NODE_ENV === 'development';

const app = express();

if (developmentEnv) {
  app.use(morgan('dev'));
}

app.use(express.json());

module.exports = app;
