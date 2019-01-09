'use strict';
const db = require('../db.js');

function handlePutPost(req,res,next){
  for (let i = 0; i < db.length; i++){
    if (db[i].id === parseInt(req.params.id)){
      db[i].name = req.body.name;
    }
  }
  res.json(db);
}

module.exports = handlePutPost;