---
title: Configuration
description: How to configure <fix>CMintS</fix> and using templateData to pass data to the template.
navTitleId: nav-doc-title-configuration
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
const port = {
  https: 4000,
  http: 3000
};

const i18nOptions = {
  defaultLocale: "en",
  crowdinId: "cmints-website"
};

const templateData =
{
  site: {
    domain: "cmints.io",
    title: "CMintS",
    description: "CMS created with the internationalization in mind",
    navigations: [
      {path: "documentation", stringId: "header-menu-item-docs"},
      {path: "presentation", stringId: "header-menu-item-slides"}
    ]
  }
};

module.exports = {templateData,i18nOptions, port};
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
