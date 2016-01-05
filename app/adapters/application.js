import DS from 'ember-data';
import Ember from 'ember';
// import config from './config/environment';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  lang: config.cmsEndPointDefaultLang,
  // corsWithCredentials: true,
  // namespace: 'autoinstalator/drupal2/?q=pl/json',
  namespace: Ember.computed('namespace', function() {
    return config.cmsEndPointUrlPrefix + '/?q=' + this.lang + '/' +config.cmsEndPointJsonPrefix;
  }),
  // namespace: 'api',
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Origin': 'localhost',
  //   'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
  // }
});
