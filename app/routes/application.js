import Ember from 'ember';

export default Ember.Route.extend({
    // _langRegister: Ember.inject.service('LanguageRegister'),
    //
    // _langAlias: Ember.computed.alias('_langRegister.lang'),
    // queryParams: {
    //     lang: {
    //         refreshModel: true
    //     }
    // },

    // beforeModel: function() {
    //     let routerRef = this;
    //     // routerRef.refresh();
    //     this.get('_langRegister').addObserver('lang', () => {
    //         Ember.Logger.log("Jestem w observe. Robie reload");
    //         routerRef.transitionTo('mainPage.home').then(() => {
    //             this.refresh();
    //         });
    //     });
    // },

    // beforeModel: function(transition) {
    //     console.log("transmistion with lang =" + transition.queryParams.lang);
    //     this.set('_langAlias', transition.queryParams.lang);
    //
    // },

    model: function() {
        return Ember.RSVP.hash({
            menu: this.store.findAll('menuElement'),
            staticElement: this.store.findAll('staticElement'),
        });
    },


    setupController: function(controller, model) {
        controller.set('menu', model.menu);
        controller.set('footer', model.staticElement.findBy('id', 'footer'));
    },

    // actions: {
    //     queryParamsDidChange: function() {
    //         // opt into full refresh
    //         this.refresh();
    //     }
    // }
});
