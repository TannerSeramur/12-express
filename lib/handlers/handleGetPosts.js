'use strict';
const db = require('../db.js');

function handleGetPost(req,res,next){
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
}

module.exports = handleGetPost;