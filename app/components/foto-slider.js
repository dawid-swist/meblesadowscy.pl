import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    pressed: function () {
      this.$('.slider').slider({full_width: true});
    }
  },
  didInsertElement: function () {
    Ember.run.scheduleOnce('afterRender', this, function () {
      this.$('.slider').slider({full_width: true});
    });
  }
});
