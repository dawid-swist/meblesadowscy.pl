import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      articles: this.store.find('article'),
      menu: this.store.find('menuElement')
    });
  },
  setupController: function (controller, model) {
    controller.set('menu',model.menu);
    controller.set('articles',model.articles);
    }
});
