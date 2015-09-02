import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function (controller, context, queryParams) {
    controller.set('anchorLocation', queryParams.anchor);
    console.console.log(queryParams.anchor);
  }
});
