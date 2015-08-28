import DS from 'ember-data';

export default DS.Model.extend({
  'title': DS.attr('string'),
  'Language': DS.attr('string'),
  'Body': DS.attr('string'),
  'isContents ': DS.attr('boolean'),
  'Priority': DS.attr('number'),
  'ShortUrl': DS.attr('string')
});
