import Ember from 'ember';
import config from '../config/environment';

/**
 * This ember service is responsible for provide proper value of lang
 */
export default Ember.Service.extend({

    // lang: "pl",
    lang: config.cmsEndPointDefaultLang,

    // getLang() {
    //     return this.get('lang');
    // },
    // setLang(value) {
    //     this.set('lang', this._verifyprovidedLang(value));
    //     Ember.Logger.log('Set new lang=' + value);
    //     return value;
    // },
    //
    // _verifyprovidedLang(lang) {
    //     return lang;
    // },
});
