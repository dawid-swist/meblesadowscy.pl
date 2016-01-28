import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['fotoNumber'],
  fotoNumber: null,
  currentFotoNumber: Ember.computed('curentProduct', function() {
    if (this.fotoNumber) {
      return this.get('fotoNumber');
    }
    return 0;
  }),
  
  linkToCurrnetImage: Ember.computed('currentFotoNumber', function() {
    let fotoNumber = this.get('currentFotoNumber');
    return this.get('curentProduct').getImageUrlByIndex(fotoNumber);
  }),
});
