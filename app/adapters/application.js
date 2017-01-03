import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

export default DS.RESTAdapter.extend({

    _langRegister: Ember.inject.service('LanguageRegister'),

    lang: Ember.computed.oneWay('_langRegister.lang'),

    namespace: Ember.computed('namespace', function() {
        // return config.cmsEndPointUrlPrefix + '/?q=' + this.get('_langselectorService').getLang() + '/' + config.cmsEndPointJsonPrefix;
        return config.cmsEndPointUrlPrefix + '/' + config.cmsEndPointJsonPrefix;
    }),

    headers: Ember.computed('lang', function() {
        Ember.Logger.log('calcualte headers');
        return {
            // "API_KEY": this.get("session.authToken"),
            "Accept-Language": this.get('lang')
        };
    }),

    /**
     * @method urlForQueryRecord
     * @param {Object} query
     * @param {String} modelName
     * @return {String} url
     */
    urlForQuery: function urlForQuery(query, modelName) {
        var postfixUrl = this._calculateParamsAdPostFixUrl(query);
        return this._buildURL(modelName) + postfixUrl;
    },

    _calculateParamsAdPostFixUrl: function _calculateParamsAdPostFixUrl(parameters) {
        var postFixUrl = "";
        if (parameters) {
            for (var param in parameters) {
                postFixUrl = postFixUrl + "/" + param + "/" + parameters[param];
            }
        }
        return postFixUrl;
    },

    shouldReloadAll: function shouldReloadAll() {
        return true;
    },
    shouldBackgroundReloadRecord: function shouldBackgroundReloadRecord() {
        return true;
    }
});