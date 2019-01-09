'use strict';
const db = require('../db.js');

function handlePostPost(req,res,next){
  // TODO: add logic to increment the ID (uuid ?)
  let {name} = req.body;
  let record = {name};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
}

module.exports = handlePostPost;