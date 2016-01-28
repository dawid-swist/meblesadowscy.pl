  import Ember from 'ember';

  export default Ember.Route.extend({
    model: function() {
      return Ember.RSVP.hash({
        articles: this.store.findAll('article'),
        sliders: this.store.findAll('slider'),
        products: this.store.findAll('product'),
        // productCategories: this.store.findAll('productCategory')
      });
    },
    setupController: function(controller, model) {
      controller.set('articles', model.articles);
      controller.set('sliders', model.sliders);
      controller.set('products', model.products);
      // controller.set('productCategories', model.productCategories);
    }
  });
