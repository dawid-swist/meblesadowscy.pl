import Ember from 'ember';

export default Ember.Component.extend({

  Categories: Ember.computed('productTypes', 'productCategories', function() {

    var productCategories = this.get('productCategories');
    var productTypes = this.get('productTypes');

    return productCategories.map(function(item) {
      return {
        name: item.get('name'),
        productTypes: productTypes.filterBy('categorii', item.get("name"))
      };
    });
  }),
});
