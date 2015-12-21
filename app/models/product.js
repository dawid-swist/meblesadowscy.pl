import DS from 'ember-data';

export default DS.Model.extend({
  Title: DS.attr('string'),
  ProductsTaxonomy: DS.attr(),
  Description: DS.attr("string"),
  Images: DS.attr(),
  Thumbnails: DS.attr()
});
