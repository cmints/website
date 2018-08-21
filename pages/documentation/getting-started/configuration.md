---
title: Configuration
description: How to configure <fix>CMintS</fix> and using templateData to pass data to the template.
navTitleId: nav-doc-title-configuration
showDocNav: true
showTOC: true
showEdit: documentation/getting-started/configuration.md
categories: [documentation, getting-started]
showTranslate: 158
order: 2
---

{config-p[Paragraph in 'Configuration' section]
<fix>config.js</fix> in the <fix>`src`</fix> folder is where you can overwrite
various website default configurations:
}

```javascript
const templateData =
{
  site: {
    title: "CMintS",
    description: "CMS created with the internationalization in mind",
    navigations: [
      {path: "documentation", stringId: "menu-item-docs"},
      {path: "news", stringId: "menu-item-news"},
      {path: "blog", stringId: "menu-item-blog"}
    ]
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
```

{config-p2[Paragraph in 'Page heading' section]
This file suppose to overwrite [default
configurations](https://github.com/Manvel/cmints/blob/master/config.js) set by
the <fix>CMintS</fix>.
}

## templateData

{templateData[Paragraph in 'templateData' section]
<fix>*templateData*</fix> object holds the data which are passed to the ejs
template. So you can directly access the values of the that object by simply
refferencing them from the .ejs file:
}

```
<% for (let navigation of site.navigations) { %>
  <li>
    <a <%-i18n.href(navigation.path)%>
      <% if (navigation.path == page.path) { %>class="active"<% } %>>
      {<%-navigation.stringId%>(header)}
    </a>
  </li>
<% } %>
```
