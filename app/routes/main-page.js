  import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      articles: this.store.find('article'),
      sliders: this.store.find('slider'),
      products: this.store.find('product')
    });
  },
  setupController: function(controller, model) {
    controller.set('articles', model.articles);
    controller.set('sliders', model.sliders);
    controller.set('products', model.products);
  }
});
