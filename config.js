const templateData =
{
  site: {
    domain: "cmints.io",
    title: "CMintS",
    description: "CMS created with the internationalization in mind"
  },
  navigations: [
      {path: "documentation", stringId: "header-menu-item-docs"}],
  localeRegionMap:
  {
    "en": "en_US",
    "de": "de_DE",
    "ru": "ru_RU"
  }
};

// See https://markdown-it.github.io/markdown-it/#MarkdownIt.new
const markdownOptions = {};

const defaultLocale = "en";

const port = {
  https: 4000,
  http: 3000
};

exports.templateData = templateData;
exports.markdownOptions = markdownOptions;
exports.defaultLocale = defaultLocale;
exports.port = port;
