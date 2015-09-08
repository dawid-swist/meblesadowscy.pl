import Ember from 'ember';

export default Ember.Component.extend({

  classTypes : Ember.computed('backgroundColor', function () {
    return "card-panel hoverable "+ this.get('backgroundColor');
  })
});
