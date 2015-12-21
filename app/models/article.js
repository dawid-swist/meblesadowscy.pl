import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  'title': DS.attr('string'),
  'Language': DS.attr('string'),
  'Body': DS.attr('string'),
  'isContents ': DS.attr('boolean'),
  'Priority': DS.attr('number'),
  'ShortUrl': DS.attr('string'),
  'Image': DS.attr(),
  'BackgroundColor': DS.attr(),
  'ColorTone': DS.attr(),

  'ImageUrl': Ember.computed('Image', function() {
    var image = this.get('Image');

    if (image) {
      return image.src;
    } else {
      return null;
    }
  }),

  'ImageAlt': Ember.computed('Image', function() {
    var image = this.get('Image');

    if (image) {
      return image.alt;
    } else {
      return null;
    }
  }),

  'BackgroundColorCss': Ember.computed(['BackgroundColor', 'ColorTone'], function() {
    var color = this.get('BackgroundColor');
    var tone = this.get('ColorTone');

    if (color && tone) {
      if (tone === 'N/A') {
        tone = '';
      }
      return color + " " + tone;
    }

    return "";
  })
});
