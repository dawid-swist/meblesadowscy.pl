import Ember from 'ember';

export default Ember.Component.extend({

  sortedCollectionOfProducts: Ember.computed('products', function() {
    return this.get('products').reduce((previous, elem) => {
      var collection = previous;

      let curCategory = elem.get('Category');
      let curProductType = elem.get('ProductType');

      var curElementOfCollection;

      if (false === collection.has(curCategory)) {
        collection.set(curCategory, Ember.Map.create(curProductType, {
          firstProduct: elem,
        }));

        return collection;
      }

      curElementOfCollection = collection.get(curCategory);

      if (false === curElementOfCollection.has(curProductType)) {
        curElementOfCollection.set(curProductType, {
          firstProduct: elem
        });
        return collection;
      }

      return collection;
    }, Ember.Map.create());
  }),
});
