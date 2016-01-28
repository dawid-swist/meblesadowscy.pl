/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var testJsonRouter = express.Router();

  testJsonRouter.get('/', function(req, res) {
    res.send({
      'test/json': []
    });
  });

  testJsonRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  testJsonRouter.get('/:id', function(req, res) {
    res.send({
      'test/json': {
        id: req.params.id
      }
    });
  });

  testJsonRouter.put('/:id', function(req, res) {
    res.send({
      'test/json': {
        id: req.params.id
      }
    });
  });

  testJsonRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/test-json', require('body-parser'));
  app.use('/api/test-json', testJsonRouter);
};
