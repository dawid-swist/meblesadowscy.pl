import Ember from 'ember';

export default Ember.Component.extend({
  itemsForPhotoSwipe: Ember.computed('images', function() {
    return this.get('images');
  }),
  index: null,

  fotoIndex: Ember.computed('index', function() {
    if (this.index) {
      return this.index;
    }
    return 0;
  }),

  psOpts: {
    index: this.fotoIndex
  },

  pressed: function() {
    this.get('myGallery').init();
    Ember.Logger.log('I am on pressed');
  },

  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      let gallery = this.get('myGallery');
      gallery.listen('close', function() {
        window.history.back();
      });
      gallery.init();
    });
  },

  // actions
  actions: {},

  psTwoOpts: {
    hideShare: true,
    arrowKeys: true
  }
});
