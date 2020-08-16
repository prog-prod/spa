import Lang from 'lang.js';

Lang.prototype._getMessage = function(key, locale) {

    locale = locale || this.getLocale();

    if (this.messages[locale] === undefined) {
        locale = this.getFallback();
    }

    let keys = key.split('.');
    let result = this.messages[locale];

    for(let k of keys){
        if (result[k] === undefined) {
            return key;
        }
        result = result[k];
    }
    return result;
}

let trans = new Lang( {
    messages: window.messages,
    locale: window.default_locale,
    fallback: window.fallback_locale
});

export default trans;