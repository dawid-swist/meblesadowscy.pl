import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  'title': DS.attr('string'),
  'ShortUrl': DS.attr('string'),
  'RouterName': DS.attr('string'),

  menuLink: Ember.computed('ShortUrl', function () {
    return this.get('ShortUrl');
  }),

  menuLinkID: Ember.computed('ShortUrl', function () {
    return "#"+this.get('ShortUrl');
  }),

  menuLabel: Ember.computed('title', function () {
    return this.get('title');
  }),

  routeName: Ember.computed('title', function () {
    return this.get('RouterName');
  })
});
