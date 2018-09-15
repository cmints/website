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
<fix>`config.js`</fix> is where you can overwrite various website default
configurations:
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
    description: "CMS created with the internationalization in mind"
  }
};

module.exports = {templateData, i18nOptions, port};
```

{config-p2[Paragraph in 'Page heading' section]
This file suppose to overwrite [default
configurations](https://github.com/Manvel/cmints/blob/master/config.js) set by
the <fix>CMintS</fix>.
}

## port

Specifies on which port to run the server, by default it's
<fix><strong>3000</strong></fix> for <fix><strong>http</strong></fix> and
<fix><strong>4000</strong></fix> for <fix><strong>https</strong></fix>.

```js
const port = {
  https: 4000,
  http: 3000
};

module.exports = {port};
```

## templateData
data and functions can be accessed from <fix>`.ejs`</fix> pages and layout
files:
}

{consider(common)}

```js
/* config.js */

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

module.exports = {templateData};
```

{templateData-p2[Paragraph in 'templateData' section]
So the specified data above can be accessed as in the example:
}

```html
<!DOCTYPE html>
  <head>
    <title><%= site.title %> | <%= page.title %></title>
    <meta name="twitter:title" content="<%= site.title %> | {page.title}">
  </head>
  <body>
...
```

{or(common)}

```js
<% for (let navigation of site.navigations) { %>
  <li>
    <a <%-i18n.href(navigation.path)%>
      <% if (navigation.path == page.path) { %>class="active"<% } %>>
      {<%-navigation.stringId%>(header)}
    </a>
  </li>
<% } %>
```

## 
