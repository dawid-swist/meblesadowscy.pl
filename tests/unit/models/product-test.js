import {
  moduleForModel, test
}
from 'ember-qunit';

moduleForModel('product', 'Unit | Model | product', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it product should contains 2 element of imagesForView', function(assert) {
  let model = this.subject({
    "id": "Architektura ogrodowa - schody 3",
    "Title": "Architektura ogrodowa - schody 3",
    "Description": "Architektura ogrodowa - schody 3",
    "Images": [{
      "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1030469.JPG?itok=kc4M58vm",
      "alt": ""
    }, {
      "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1030472.JPG?itok=Bm2B2u8T",
      "alt": ""
    }],
    "ProductsTaxonomy": "Architektura ogrodowa, Schody",
    "Thumbnails": [{
      "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1030469.JPG?itok=E0VWwJjQ",
      "alt": ""
    }, {
      "src": "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1030472.JPG?itok=zz08AHYX",
      "alt": ""
    }],
    "Category": "Architektura ogrodowa",
    "ProductType": "Schody"
  });

  var imagesForView = model.get("imagesForView");

  assert.equal(imagesForView[0].image, "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1030469.JPG?itok=kc4M58vm");
  assert.equal(imagesForView[0].thumbnail, "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1030469.JPG?itok=E0VWwJjQ");
  assert.equal(imagesForView[1].image, "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/images_1600x1200/public/P1030472.JPG?itok=Bm2B2u8T");
  assert.equal(imagesForView[1].thumbnail, "http://serwer1570103.home.pl/autoinstalator/drupal5/sites/default/files/styles/medium/public/P1030472.JPG?itok=zz08AHYX");
});
