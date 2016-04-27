  import Ember from 'ember';

  export default Ember.Route.extend({
    model: function() {
      return Ember.RSVP.hash({
        sliders: this.store.findAll('slider'),
        productTypes: this.store.findAll('productType'),
        productCategories: this.store.findAll('productCategory')
      });
    },

    setupController: function(controller, model) {

      // let categorii = this.calculateCategorii(model);

      // controller.set('categorii', categorii);
      controller.set('sliders', model.sliders);
      controller.set('productTypes', model.productTypes);
      controller.set('productCategories', model.productCategories);
    },

    calculateCategorii: function(model) {
      return model.productCategories.map(function(item) {
        return {
          name: item.get('name'),
          productTypes: model.productTypes.filterBy('categorii', item.get("name"))
        };
      });
    }

  });
