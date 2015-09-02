import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('mainPage', {path: '/web'}, function () {
    this.route('nav',{ path: '/:article_name',queryParams: ['anchor']});
  });
});

export default Router;
