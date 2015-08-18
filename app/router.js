import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('oFirmie');
  this.route('oferta');
  this.route('referencje');
  this.route('wspolpraca');
  this.route('kontakt');
});

export default Router;
