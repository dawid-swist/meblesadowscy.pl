/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var slidersRouter = express.Router();

  slidersRouter.get('/', function(req, res) {
    res.send({
      'sliders': [{
        "id": "31",
        "Title": "MEBLE Sadowscy",
        "Image": {
          "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images1600x400/public/DSC02422%20karuzela.jpg?itok=7-PclsCq",
          "alt": ""
        },
        "Description_line1": "Tel. 787 759 659",
        "Description_line2": "biuro@meblesadowscy.pl"
      }, {

        "id": "32",
        "Title": "MEBLE Sadowscy",
        "Image": {
          "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images1600x400/public/DSC02682%20karu%20donice.jpg?itok=E9R1ei1S",
          "alt": ""
        },
        "Description_line1": "Tel. 787 759 659",
        "Description_line2": "biuro@meblesadowscy.pl"
      }]
    });
  });

  app.use('/api/sliders', slidersRouter);
};
