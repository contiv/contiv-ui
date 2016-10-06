"use strict";
/** @module view */ /** for typedoc */
var predicates_1 = require("../common/predicates");
var coreservices_1 = require("../common/coreservices");
var common_1 = require("../common/common");
var resolvable_1 = require("../resolve/resolvable");
/**
 * Service which manages loading of templates from a ViewConfig.
 */
var TemplateFactory = (function () {
    function TemplateFactory() {
    }
    /**
     * Creates a template from a configuration object.
     *
     * @param config Configuration object for which to load a template.
     * The following properties are search in the specified order, and the first one
     * that is defined is used to create the template:
     *
     * @param params  Parameters to pass to the template function.
     * @param context The resolve context associated with the template's view
     *
     * @return {string|object}  The template html as a string, or a promise for
     * that string,or `null` if no template is configured.
     */
    TemplateFactory.prototype.fromConfig = function (config, params, context) {
        return (predicates_1.isDefined(config.template) ? this.fromString(config.template, params) :
            predicates_1.isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
                predicates_1.isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, context) :
                    null);
    };
    ;
    /**
     * Creates a template from a string or a function returning a string.
     *
     * @param template html template as a string or function that returns an html template as a string.
     * @param params Parameters to pass to the template function.
     *
     * @return {string|object} The template html as a string, or a promise for that
     * string.
     */
    TemplateFactory.prototype.fromString = function (template, params) {
        return predicates_1.isFunction(template) ? template(params) : template;
    };
    ;
    /**
     * Loads a template from the a URL via `$http` and `$templateCache`.
     *
     * @param {string|Function} url url of the template to load, or a function
     * that returns a url.
     * @param {Object} params Parameters to pass to the url function.
     * @return {string|Promise.<string>} The template html as a string, or a promise
     * for that string.
     */
    TemplateFactory.prototype.fromUrl = function (url, params) {
        if (predicates_1.isFunction(url))
            url = url(params);
        if (url == null)
            return null;
        return coreservices_1.services.template.get(url);
    };
    ;
    /**
     * Creates a template by invoking an injectable provider function.
     *
     * @param provider Function to invoke via `locals`
     * @param {Function} injectFn a function used to invoke the template provider
     * @return {string|Promise.<string>} The template html as a string, or a promise
     * for that string.
     */
    TemplateFactory.prototype.fromProvider = function (provider, params, context) {
        var deps = coreservices_1.services.$injector.annotate(provider);
        var providerFn = predicates_1.isArray(provider) ? common_1.tail(provider) : provider;
        var resolvable = new resolvable_1.Resolvable("", providerFn, deps);
        return resolvable.get(context);
    };
    ;
    return TemplateFactory;
}());
exports.TemplateFactory = TemplateFactory;
//# sourceMappingURL=templateFactory.js.map