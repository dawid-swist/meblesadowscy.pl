import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      allReleatedProducts: this.store.query('product', {
        productTypeID: params.product_type
      })
    });
  },
  setupController: function(controller, model) {
    controller.set('allReleatedProducts', model.allReleatedProducts);
  }
});
