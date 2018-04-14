const templateData =
{
  site: {
    title: "CMintS",
    description: "CMS created with the internationalization in mind"
  },
  navigations: [
      {path: "documentation", stringId: "menu-item-docs"}]
};

// See https://markdown-it.github.io/markdown-it/#MarkdownIt.new
const markdownOptions = {};

const defaultLocale = "en";

exports.templateData = templateData;
exports.markdownOptions = markdownOptions;
exports.defaultLocale = defaultLocale;
