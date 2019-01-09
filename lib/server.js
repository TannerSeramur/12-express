'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

const uuid = require('uuid');

const util = require('util');

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

app.use(express.json());

app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// GET
function handleGetPosts(req,res,next){
  let count = db.length;
  let results = db;
  res.json({count,results});
}
function handleGetPost(req,res,next){
  console.log('~~~~~ logs from get post route ~~~~~');
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// POST
function handlePostPosts(req,res,next){
  // TODO: add logic to increment the ID (uuid ?)
  console.log('Server: i see a post posts request');
  let {name} = req.body;
  let record = {name};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
  console.log(`This is the db after the post: ${util.inspect(db)}`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
}
function handlePostPost(req,res,next){

}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PUTS
function handlePutPost(req,res,next){
  console.log('~~🇺🇸~~~ logs from put post route ~~🇺🇸~~~');
  for (let i = 0; i < db.length; i++){
    if (db[i].id === parseInt(req.params.id)){
      console.log(`db[i]: ${db[i]}, req.params.id: ${req.params.id}, req.body.name: ${req.body.name}`);
      db[i].name = req.body.name;
    }
  }
  let {name} = req.body;
  res.json(db);
  console.log(`This is the db after the put: ${util.inspect(db)}`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// DELETES

function handleDeletePost(req,res,next){
/*
http DELETE :8080/posts/1/
*/
  console.log('~~🇺🇸~~~ logs from delete post route ~~🇺🇸~~~');
  console.log(`😏 This is the db before the delete: ${util.inspect(db)}`);
  for (let i = 0; i < db.length; i++){
    if (db[i].id === parseInt(req.params.id)){
      db.splice(i,1); // deletes index i of db
    }
  }
  console.log(`This is the db after the delete: ${util.inspect(db)}`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  res.json({});
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
app.post('/posts', handlePostPosts);
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
  console.log('😅 im in the * route');
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({error:'Not Found'});
});

app.use((error, req, res, next) => {
  console.log('😅 im in the error route');
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




