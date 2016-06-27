import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  Title: DS.attr('string'),
  ProductType: DS.attr('string'),
  Description: DS.attr('string'),
  Thumbnails: DS.attr(),

  firstThumbiail: Ember.computed('imagesForView', function () {
    return this.get('imagesForView')[0].thumbnail;
  })
});
