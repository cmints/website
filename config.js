// See https://markdown-it.github.io/markdown-it/#MarkdownIt.new
const markdownOptions = {};

const defaultLocale = "en";

const port = {
  https: 4000,
  http: 3000
};
const hostname = "0.0.0.0";

const crowdinId = "cmints-website";

const templateData =
{
  site: {
    domain: "cmints.io",
    title: "CMintS",
    description: "CMS created with the internationalization in mind",
    github: "https://github.com/Manvel/cmints-website",
    crowdin: `https://crowdin.com/translate/${crowdinId}`,
    localeMap: {
      "en": {name: "English", region: "en_US"},
      "de": {name: "Deutsch", region: "de_DE", crowdin: "en-de"},
      "ru": {name: "Русский", region: "ru_RU", crowdin: "en-ru" },
      "es": {name: "Español", region: "es_ES", crowdin: "en-es" },
      "lt": {name: "Lietuvių", region: "lt_LT", crowdin: "en-lt" },
      "hy-AM": {name: "Հայերեն", region: "hy_AM", crowdin: "en-hy" }
    },
    defaultLocale: "en",
    navigations: [
      {path: "documentation", contains: "documentation", stringId: "header-menu-item-docs"},
      {path: "presentation", stringId: "header-menu-item-slides"}
    ]
  }
};

module.exports = {templateData, markdownOptions, defaultLocale, port,
  hostname, crowdinId};
