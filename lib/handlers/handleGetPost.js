'use strict';
const db = require('../db.js');

function handleGetPosts(req,res,next){
  console.log("😎😎😎");
  
  let count = db.length;
  let results = db;
  res.json({count,results});
}
module.exports = handleGetPosts;