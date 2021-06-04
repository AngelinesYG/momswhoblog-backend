const express = require('express')
const moms = express.Router()

moms.get('/', (req, res) => {
  res.json([
     {id: 1, username: "somebody"},
     {id: 2, username: "somebody_else"}
 ]);
});

module.exports = moms;
