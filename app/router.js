import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('mainPage', { path: '/web' }, function () {
    this.route('nav', { path: '/:article_id' });
    this.route('home', { path: '/home' });
  });
  this.route('product', { path: '/product' }, function () {
    this.route('show', { path: '/:product_type' });
    this.route('gallery', { path: '/gallery/:product_id' });
  });
});

export default Router;
