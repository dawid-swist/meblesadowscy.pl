import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  Title: DS.attr('string'),
  ProductsTaxonomy: DS.attr(),
  Category: DS.attr("string"),
  ProductType: DS.attr("String"),
  Description: DS.attr("string"),
  Images: DS.attr(),
  Thumbnails: DS.attr(),

  imagesForView: Ember.computed('Images', 'Thumbnails', function() {
    var imagesSize = this.get('Images').length;
    var imagesCollectionForView = [];
    
    for (var i = 0; i < imagesSize; i++) {
      imagesCollectionForView.push({
        image: this.get('Images')[i].src,
        thumbnail: this.get('Thumbnails')[i].src
      });
    }
    return imagesCollectionForView;
  })
});
