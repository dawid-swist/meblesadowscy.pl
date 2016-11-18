import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
      menu: this.store.findAll('menuElement'),
      staticElement: this.store.findAll('staticElement')
    });
  },

  setupController: function(controller, model) {
    controller.set('menu', model.menu);
    controller.set('footer', model.staticElement.findBy('id', 'footer'));
  }
});
