/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var menuElementsRouter = express.Router();

  menuElementsRouter.get('/', function(req, res) {
    res.send({
      'menu-elements': [{
        "title": "Home",
        "id": "13",
        "ShortUrl": "/",
        "RouterName": "mainPage.home"
      }, {
        "title": "O firmie",
        "id": "16",
        "ShortUrl": "firma",
        "RouterName": "mainPage"
      }, {
        "title": "Wpolpraca",
        "id": "21",
        "ShortUrl": "wpolpraca",
        "RouterName": "mainPage.nav"
      }, {
        "title": "Kontakt",
        "id": "25",
        "ShortUrl": null,
        "RouterName": null
      }, {
        "title": "Referencje",
        "id": "19",
        "ShortUrl": "referencje",
        "RouterName": null
      }]
    });
  });

  app.use('/api/menu_elements', menuElementsRouter);
};
