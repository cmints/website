---
title: Configuration
description: How to configure CMintS and using templateData to pass data to the template.
navTitleId: nav-doc-title-configuration
showDocNav: true
showTOC: true
showEdit: documentation/getting-started/configuration.md
showTranslate: 158
---

{config-p[Paragraph in 'Configuration' section]
config.js in the `src` folder is where you can overwrite various website default configurations:
}

```javascript
const templateData =
{
  site: {
    title: "CMintS",
    description: "CMS created with the internationalization in mind"
  },
  navigations: [
      {path: "documentation", stringId: "menu-item-docs"},
      {path: "news", stringId: "menu-item-news"},
      {path: "blog", stringId: "menu-item-blog"}]
};

// See https://markdown-it.github.io/markdown-it/#MarkdownIt.new
const markdownOptions = {};

const defaultLocale = "en";

exports.templateData = templateData;
exports.markdownOptions = markdownOptions;
exports.defaultLocale = defaultLocale;
```

{config-p2[Paragraph in 'Page heading' section]
This file suppose to overwrite [default
configurations](https://github.com/Manvel/cmints/blob/master/config.js) set by
the CMintS.
}

## templateData

{templateData[Paragraph in 'templateData' section]
*templateData* object holds the data which are passed to the ejs template. So you
can directly access the values of the that object by simply refferencing them from the .ejs file:
}

```
<% for (let navigation of navigations) { %>
  <li>
    <a <%-href(navigation.path)%>
      <% if (navigation.path == currentPage) { %>class="active"<% } %>>
      {<%-navigation.stringId%>(header)}
    </a>
  </li>
<% } %>
```

