import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  lang: config.cmsEndPointDefaultLang,
  namespace: Ember.computed('namespace', function() {
    return config.cmsEndPointUrlPrefix + '/?q=' + this.lang + '/' + config.cmsEndPointJsonPrefix;
  }),

  shouldReloadAll: function() {
    return true;
  },
  shouldBackgroundReloadRecord: function() {
    return true;
  }
});
