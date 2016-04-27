import Ember from 'ember';

export default Ember.Component.extend({

  Categories: Ember.computed('productTypes', 'productCategories', function() {

    let productCategories = this.get('productCategories');
    let productTypes = this.get('productTypes');

    return productCategories.map(function(item) {
      return {
        name: item.get('name'),
        productTypes: productTypes.filterBy('categorii', item.get("name"))
      };
    });
  }),
});
