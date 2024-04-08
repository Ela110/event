//import express
const express = require('express');
// require('colors');
require('dotenv').config();
//cors, weil wir localhost sonst 2mal haben
const cors = require('cors');
// const { query } = require('./services/db.js');

//verschlüsseln
const port = process.env.port || 3001;
//save into an app
const app = express();

app.use(express.json());
app.use(cors());


app.get('/', async (req, res) => {
    const result = await query('SELECT NOW();', []);
    // console.log(result);
    const now = result.rows[0].now;
    res.send(`It is ${now}`);
  });

//show it on the port 3001
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });