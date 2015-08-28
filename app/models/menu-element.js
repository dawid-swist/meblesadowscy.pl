import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  'title': DS.attr('string'),
  'ShortUrl': DS.attr('string'),

  menuLink: Ember.computed('ShortUrl', function () {
    return this.get('ShortUrl');
  }),

  menuLabel: Ember.computed('title', function () {
    return this.get('title');
  })

});
