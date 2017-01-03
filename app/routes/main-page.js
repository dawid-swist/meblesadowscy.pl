  import Ember from 'ember';

  export default Ember.Route.extend({


      //   _langRegister: Ember.inject.service('LanguageRegister'),
      //   queryParams: {
      //       lang: {
      //           refreshModel: true
      //       }
      //   },

      //   beforeModel: function() {
      //       this.get('_langRegister').setLang(this.paramsFor('mainPage').lang);
      //   },

      model: function() {
          return Ember.RSVP.hash({
              sliders: this.store.findAll('slider'),
              productTypes: this.store.findAll('productType'),
              productCategories: this.store.findAll('productCategory')
          });
      },

      setupController: function(controller, model) {
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