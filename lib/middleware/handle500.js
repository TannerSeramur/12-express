'use strict';

function handle500(error, req, res, next) {
  res.status(500).send('Server Error');
  res.json({error: error});
  res.end();
}

module.exports = handle500;