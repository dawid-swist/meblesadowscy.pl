import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  lang: 'pl',
  corsWithCredentials: true,
  host: 'https://cors-anywhere.herokuapp.com/http://serwer1570103.home.pl',
  namespace: 'autoinstalator/drupal2/?q=pl/json',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Origin': 'localhost',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
  }
});
