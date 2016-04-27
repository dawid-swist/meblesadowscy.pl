import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  name: DS.attr('string'),
  picture: DS.attr(),
  categorii: DS.attr('string'),

  pictureUrl: Ember.computed('picture', function() {
    return this.get('picture').src;
  }),

});
