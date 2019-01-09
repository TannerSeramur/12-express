'use strict';

// setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// ⭐️ middleware ⭐️ 
// --------------------------------------------
app.use('*', require('./middleware/handle400'))
app.use(require('./middleware/handle500'));
app.use(express.json());
app.use(require('./middleware/log'));

// ~~~~~~~~~~~~~~~~~ ⭐️ HELPERS ⭐️ ~~~~~~~~~~~~~~~~~~~~~~~
const isValidData = require('./helpers/isValidData');

// ⭐️ ROUTES ⭐️
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ✅ http GET :8080/posts/
app.get('/posts', require('./handlers/handleGetPost'));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ✅ http GET :8080/posts/1/
app.get('/posts/:id', require('./handlers/handleGetPosts'));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ✅ echo '{"name":"New Name"}' | http POST :8080/posts/
app.post('/posts', require('./handlers/handlePostPost'));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ✅ echo '{"name":"Changed Name"}' | http PUT :8080/posts/1
app.put('/posts/:id',require('./handlers/handlePutPost'));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ✅ http DELETE :8080/posts/1/
app.delete('/posts/:id', require('./handlers/handleDeletePost'));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};


