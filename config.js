"use strict";

const {getLanguage, highlight} = require("highlight.js");

// See https://markdown-it.github.io/markdown-it/#MarkdownIt.new
const markdownOptions = {
  highlight(str, langAndi18n)
  {
    const [lang, i18n] = langAndi18n.split("-");
    const result = (lang && getLanguage(lang)) ? highlight(lang, str).value : "";
    if (i18n)
    {
      // Replace i18n braces to use inside of code blocks
      return result.replace(/\\{/g, "&#123;").replace(/\\}/g, "&#125;");
    }
    else
    {
      return result;
    }
  }
};
//
const port = {
  https: 4000,
  http: 3000
};
const hostname = "0.0.0.0";
const root = "";

const i18nOptions = {
  defaultLocale: "en",
  crowdinId: "cmints-website"
};

const deployment = {
  where: "git"
};

const generationType = "Double";

const gzip = true;

const templateData =
{
  site: {
    domain: "cmints.netlify.com",
    root,
    title: "CMintS",
    description: "CMS created with the internationalization in mind",
    github: "https://github.com/Manvel/cmints-website",
    crowdin: `https://crowdin.com/translate/${i18nOptions.crowdinId}`,
    localeMap: {
      "en": {name: "English", region: "en_US"},
      "de": {name: "Deutsch", region: "de_DE", crowdin: "en-de"},
      "ru": {name: "Русский", region: "ru_RU", crowdin: "en-ru"},
      "es": {name: "Español", region: "es_ES", crowdin: "en-es"},
      "lt": {name: "Lietuvių", region: "lt_LT", crowdin: "en-lt"},
      "hy-AM": {name: "Հայերեն", region: "hy_AM", crowdin: "en-hy"}
    },
    defaultLocale: "en",
    navigations: [
      {
        path: "documentation",
        contains: "documentation",
        stringId: "header-menu-item-docs"
      },
      {
        path: "presentation",
        stringId: "header-menu-item-slides"
      }
    ],
    secondaryNavigations: {
      documentation: [
        {
          category: "getting-started",
          titleId: "nav-doc-title-getting-started"
        },
        {
          category: "pages",
          titleId: "nav-doc-title-pages"
        },
        {
          category: "themes",
          titleId: "nav-doc-title-themes"
        },
        {
          category: "i18n",
          titleId: "nav-doc-title-i18n"
        }
      ]
    }
  }
};

module.exports = {templateData, markdownOptions, i18nOptions, port,
  hostname, deployment, gzip, root, generationType};
