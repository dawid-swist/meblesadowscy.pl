import DS from 'ember-data';

export default DS.Model.extend({
  'class_left': DS.attr('string'),
  'content_left': DS.attr('string'),
  'class_right': DS.attr('string'),
  'content_right': DS.attr('string'),
});
