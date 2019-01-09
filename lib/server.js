'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

const uuid = require('uuid');

const util = require('util');

const handleDeletePost = require('./handlers/handleDeletePost');

const handleGetPost = require('./handlers/handleGetPost');

const handleGetPosts = require('./handlers/handleGetPosts');

const handlePostPost = require('./handlers/handlePostPost');

const handlePutPost = require('./handlers/handlePutPost');


app.use(express.json());

app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

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

// class Data = {
//   constructor(req){

//   }
// }


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
};


