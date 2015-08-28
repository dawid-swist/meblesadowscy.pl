import Ember from 'ember';

export default Ember.Component.extend({

  silderElements: [
    {
      image: 'http://lorempixel.com/580/250/nature/1',
      title: 'MEBLE Sadowscy',
      email: 's.sadowski@op.pl',
      address: 'biuro: ul. Powstańców Śląskich 134 (p.II, lok 215), 53-315 Wrocław'
    },
    {
      image: 'http://lorempixel.com/580/250/nature/2',
      title: 'MEBLE Sadowscy',
      email: 's.sadowski@op.pl',
      address: 'biuro: ul. Powstańców Śląskich 134 (p.II, lok 215), 53-315 Wrocław'
    },
    {
      image: 'http://lorempixel.com/580/250/nature/3',
      title: 'MEBLE Sadowscy',
      email: 's.sadowski@op.pl',
      address: 'biuro: ul. Powstańców Śląskich 134 (p.II, lok 215), 53-315 Wrocław'
    },
    {
      image: 'http://lorempixel.com/580/250/nature/4',
      title: 'MEBLE Sadowscy',
      email: 's.sadowski@op.pl',
      address: 'biuro: ul. Powstańców Śląskich 134 (p.II, lok 215), 53-315 Wrocław'
    }
  ],

  actions: {
    pressed: function () {
      this.$('.slider').slider({full_width: true});
    }
  },
  didInsertElement: function () {
    Ember.run.scheduleOnce('afterRender', this, function () {
      this.$('.slider').slider({full_width: true});
    });
  }
});
