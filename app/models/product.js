import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  Title: DS.attr('string'),
  ProductsTaxonomy: DS.attr(),
  Category: DS.attr('string'),
  ProductType: DS.attr('string'),
  Description: DS.attr('string'),
  Images: DS.attr(),
  Thumbnails: DS.attr(),

  imagesForView: Ember.computed('Images', 'Thumbnails', function() {
    var imagesSize = this.get('Images').length;
    var imagesCollectionForView = [];

    for (var i = 0; i < imagesSize; i++) {
      imagesCollectionForView.push({
        image: this.get('Images')[i].src,
        thumbnail: this.get('Thumbnails')[i].src,
      });
    }
    return imagesCollectionForView;
  }),

  imagesForPhotoSwipe: Ember.computed('Images', function() {
    var imagesSize = this.get('Images').length;
    var imagesCollection = [];

    for (var i = 0; i < imagesSize; i++) {
      imagesCollection.push({
        src: this.get('Images')[i].src,
        w: 1600,
        h: 1200,
        pid: i.toString()
      });
    }
    return imagesCollection;
  }),


  firstThumbiail: Ember.computed('imagesForView', function() {
    return this.get('imagesForView')[0].thumbnail;
  }),

  getImageUrlByIndex: function(imageNumber) {
    return this.get('Images')[imageNumber].src;
  }
});
