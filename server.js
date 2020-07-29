// https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f
require('dotenv').config();

const express = require('express');
// https://www.youtube.com/watch?v=LVfH5FDOa3o
const apiRouter = require('./routes');

const app = express();

app.use(express.json());

app.use('/api/chirps', apiRouter);

const port = process.env.PORT || '3000';

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})