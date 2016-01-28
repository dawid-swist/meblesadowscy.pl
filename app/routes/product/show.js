import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      curentProduct: this.store.find('product', params.product_id)
    });
  },
  setupController: function(controller, model) {
    controller.set('curentProduct', model.curentProduct);
    let allReleatedProducts = model.products.filterBy('ProductType', model.curentProduct.get('ProductType'));
    controller.set('allReleatedProducts', allReleatedProducts);
    controller.set('isOnlyOneProcuts', allReleatedProducts.length < 2);
  }
});
