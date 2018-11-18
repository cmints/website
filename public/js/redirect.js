(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Uses <link rel="alternate" href="..." hreflang="..."> tags to generate locale
 * to alternative page mappings
 * @returns {Object} example output:
 * ```
 * {
 * "ru": "https://cmints.io/ru/",
 * "de": "https://cmints.io/de/",
 * "es": "https://cmints.io/es/"
 * }
 * ```
 */
function getLocaleToPageMap()
{
  var alternativesSelector = "link[rel='alternate'][href][hreflang]";
  var alternateElements = document.querySelectorAll(alternativesSelector);
  var localeToPage = {};

  for (var i = 0; i < alternateElements.length; i++)
  {
    var alternateElement = alternateElements[i];
    var page = alternateElement.getAttribute("href");
    var locale = alternateElement.getAttribute("hreflang");
    localeToPage[locale] = page;
  }
  return localeToPage;
}

/**
 * Language negotiator
 * @param {Array} preferedLocales ex.: navigator.languages
 * @param {Array} availableLocales ex.: ["en-EN", "ru", "es_ES"]
 */
function getLocale(preferedLocales, availableLocales)
{
  for (var i = 0; i < preferedLocales.length; i++)
  {
    var preferedLocale = preferedLocales[i];
    var country = preferedLocale.split("-")[0];
    var region = preferedLocale.split("-")[1];
    for (var j = 0; j < availableLocales.length; j++)
    {
      var locale = availableLocales[j];
      if (locale == country || locale == country + "-" + region ||
          locale == country + "_" + region)
      {
        return locale;
      }
    }
  }
  return null;
}

/**
 * Suggests a redirect location
 */
function suggestRedirect()
{
  if ("languages" in navigator)
  {
    var preferedLocales = navigator.languages;
    var localeToPage = getLocaleToPageMap(document);
    var availableLocales = Object.keys(localeToPage);
    availableLocales.unshift(document.documentElement.lang);
    var locale = getLocale(preferedLocales, availableLocales);
    return locale == document.documentElement.lang ? "" : localeToPage[locale];
  }
  else
  {
    console.log("Suggest method is not supported");
  }
}

module.exports = {getLocaleToPageMap, getLocale, suggestRedirect};

},{}],2:[function(require,module,exports){
"use strict";

var redirect = require("lang-redirect");

var redirection = redirect.suggestRedirect();

if (redirection)
  window.location.replace(redirection);

},{"lang-redirect":1}]},{},[2]);
