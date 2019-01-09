'use strict';

function handle400(req, res) {
  res.status(400).send('Source Not Found');
  res.json({error:'Not Found'});
  res.end();
}

module.exports = handle400;