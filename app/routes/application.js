import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
      menu: this.store.findAll('menuElement')
    });
  },

  setupController: function(controller, model) {
    controller.set('menu', model.menu);
  }
});
