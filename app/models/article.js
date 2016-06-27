import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  'title': _emberData['default'].attr('string'),
  'Language': _emberData['default'].attr('string'),
  'Body': _emberData['default'].attr('string'),
  'isContents ': _emberData['default'].attr('boolean'),
  'Priority': _emberData['default'].attr('number'),
  'ShortUrl': _emberData['default'].attr('string'),
  'Image': _emberData['default'].attr(),
  'BackgroundColor': _emberData['default'].attr(),
  'ColorTone': _emberData['default'].attr(),
  'ImageUrl': _ember['default'].computed('Image', function() {
    var image = this.get('Image');

    if (image) {
      return image.src;
    } else {
      return null;
    }
  }),

  'ImageAlt': _ember['default'].computed('Image', function() {
    var image = this.get('Image');

    if (image) {
      return image.alt;
    } else {
      return null;
    }
  }),

  'BackgroundColorCss': _ember['default'].computed('BackgroundColor', 'ColorTone', function() {
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
