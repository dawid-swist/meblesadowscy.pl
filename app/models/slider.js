import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  'Title': DS.attr(),
  'Image': DS.attr(),
  "Description_line1": DS.attr("string"),
  "Description_line2": DS.attr("string"),
  'textColor': DS.attr('string'),
  'toneColor': DS.attr('string'),

  'textStyle': Ember.computed('textColor', 'toneColor', function() {
    return this.get('textColor') + '-text ' + this.get('toneColor') + "-text";
  }),

  'ImageUrl': Ember.computed('Image', function() {
    var image = this.get('Image');

    if (image) {
      return image.src;
    } else {
      return null;
    }
  }),
});
