import Ember from 'ember';

export default Ember.Component.extend({

    _langRegister: Ember.inject.service('LanguageRegister'),

    // lang: Ember.computed('_langRegister', function() {
    //     return this.get('_langRegister').getLang();
    // }),


    lang: Ember.computed.alias('_langRegister.lang'),

    // lang: Ember.computed('_langRegister', function() {
    //     return this.get('_langRegister').get('lang');
    // }),

    actions: {
        pressed: function() {
            this.$('.dropdown-button').dropdown();
        },
        selectLang: function(selectedLang) {
            // this.set('lang', selectedLang);
            // this.get('_langRegister.lang').set('lang', selectedLang);
            this.set('lang', selectedLang);
            this.get('_langRegister').set('lang', selectedLang);
            Ember.Logger.log('select lang: ' + selectedLang);
            // this.sendAction('selected');
        }
    },
    didInsertElement: function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
            this.$('.dropdown-button').dropdown();
        });
    },

});