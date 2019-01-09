'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

const uuid = require('uuid');

const util = require('util');

// ~~~~~~~~~~~~~~~~~ DB ~~~~~~~~~~~~~~~~~~~~~~~
// TODO: make this into a .json file
let db = [
  {
    "name": "michael",
    "id": 1,
  },
  {
    "name": "michael1",
    "id": 2,
  },
  {
    "name": "michael2",
    "id": 3,
  },
  {
    "name": "michael3",
    "id": 4,
  },
];
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

app.use(express.json());

app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

// ~~~~~~~~~~~~~~~~~ GETS ~~~~~~~~~~~~~~~~~~~~~~~
function handleGetPosts(req,res,next){
  let count = db.length;
  let results = db;
  res.json({count,results});
}
function handleGetPost(req,res,next){
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
}

// ~~~~~~~~~~~~~~~~~ POSTS ~~~~~~~~~~~~~~~~~~~~~~~
function handlePostPost(req,res,next){
  // TODO: add logic to increment the ID (uuid ?)
  let {name} = req.body;
  let record = {name};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
}

// ~~~~~~~~~~~~~~~~~ PUTS ~~~~~~~~~~~~~~~~~~~~~~~
function handlePutPost(req,res,next){
  for (let i = 0; i < db.length; i++){
    if (db[i].id === parseInt(req.params.id)){
      db[i].name = req.body.name;
    }
  }
  res.json(db);
}
// ~~~~~~~~~~~~~~~~~ DELETES ~~~~~~~~~~~~~~~~~~~~~~~
function handleDeletePost(req,res,next){
  // console.log('~~🇺🇸~~😏~ logs from delete post route ~~🇺🇸~~~');
  for (let i = 0; i < db.length; i++){
    if (db[i].id === parseInt(req.params.id)){
      db.splice(i,1); // deletes index i of db
    }
  }
  res.json({});
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~ HELPERS ~~~~~~~~~~~~~~~~~~~~~~~
function isValidData(req){
  let validName = false;
  let validId = false;
  let validObj = false;

  // checks object type
  if(req.body && typeof(req.body) === "object"){
    validObj = true;
  } else {
    return validObj;
  }

    
  let requestId = parseInt(req.params.id);
  let requestName = req.body.name;

  // checks id
  for (let i = 0; i < db.length; i++){
    if (db[i].id === requestId){
      validId = true;
    }
  }

  // checks name
  if(requestName && typeof(requestName) === "string"{
    validName = true;
  }


  return valid;
}

class Data = {
  constructor(req){

  }
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
http GET :8080/posts/
*/
app.get('/posts', handleGetPosts);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
http GET :8080/posts/1/
*/
app.get('/posts/:id', handleGetPost);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
echo '{"name":"New Name"}' | http POST :8080/posts/
*/
app.post('/posts', handlePostPost);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
echo '{"name":"Changed Name"}' | http PUT :8080/posts/1
*/
app.put('/posts/:id', handlePutPost);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
http DELETE :8080/posts/1/
*/
app.delete('/posts/:id', handleDeletePost);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// middleware
// --------------------------------------------
app.use('*', (req,res) => {
  // console.log('😅 im in the * route');
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({error:'Not Found'});
});

app.use((error, req, res, next) => {
  // console.log('😅 im in the error route');
  res.status(500);
  res.statusMessage = 'Server Error';
  res.json({error:error});
});


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
  handlers: {handleGetPosts, handleGetPost, handlePostPost, handlePutPost, handleDeletePost},
};

/*  Modules
server
handleGetPosts.js
handleGetPost.js
handlePostPost.js
handlePutPost.js
handleDeletePost.js
*/


