---
title: EJS
description: Learn how to create layouts in <fix>CMintS</fix>. <fix>CMintS</fix> is using ejs as a templating engine for creating layouts.
showTOC: true
categories: [documentation, themes]
showEdit: documentation/themes/ejs.md
showTranslate: 155
order: 1
---

{ejs-p[Paragraph in 'ejs' section]
<fix>CMintS</fix> is using <a href="http://ejs.co/" target="_blank" rel="noopener">EJS</a> as a templating
engine for creating layouts, EJS can also be used for the
[page](/documentation/pages#ejs) creation. EJS is a simple templating language
that lets you generate HTML markup while writing plain JavaScript. Detailed EJS
syntax documentation can be found <a
href="https://github.com/mde/ejs/blob/master/docs/syntax.md"
target="_blank" rel="noopener">here</a>, also there is an online playground, to <a
href="https://ionicabizau.github.io/ejs-playground/" target="_blank" rel="noopener">try out the
syntax</a>.
}

## {layout[Page heading] Layout}

{layout-p[Paragraph in 'Layout' section]
As was mentioned in the [themes overview](/documentation/themes#layouts) in
order to decide which layout to use for the page, a Front Matter "layout"
property needs to be used, which falls back to the default layout.
}

{layout-p2[Paragraph in 'Layout' section]
Considering snippet below being <fix>`theme/layouts/default.ejs`</fix>:
}

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="/css/main.css">
</head>
<body>
<main>
  <%- page.body %>
</main>
</body>
</html>
```

{layout-p3[Paragraph in 'Layout' section]
And snippet below being <fix>`pages/about.md`</fix>:
}

```markdown
# about
This is the about page
```

{layout-p4[Paragraph in 'Layout' section]
The request to the <fix>`/about`</fix> page will generate HTML below:
}

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="/css/main.css">
</head>
<body>
<main>
  <h1>about</h1>
  <p>This is the about page</p>
</main>
</body>
</html>
```

{layout-p5[Paragraph in 'Layout' section]
But if you have another layout, which is located in
<fix>`theme/layouts/home.ejs`</fix>, in order to use it you would use Front Matter
ex.:
}

```markdown
---
layout: home
---

# Homepage
This page is using home.ejs layout
```

## body

{body-p[Paragraph in 'body' section]
As you might have noticed from the previous example <fix>`<%- page.body %>`</fix>
placeholder in the layout ejs is replaced with the actual content, no matter
what [page is used(markdown, html or ejs)](/documentation/pages) actual content
of the page is being rendered and replaces the <fix>`<%- page.body %>`</fix>
placeholder.
}

## partials

{partials-p[Paragraph in 'partials' section]
Partials are EJS layout files that can be loaded into the EJS layouts:
}

```javascript
<% include partialPath %>
<%- include('partialPath', {key: value}) %>
```

{partials-p2[Paragraph in 'partials' section]
This can come handy for different layout parts separation and reuse:
}

```HTML
<!DOCTYPE html>
<html lang="en-US">
<head>
  <% include partials/head %>
  <% include partials/meta %>
</head>
<body>
  <% include partials/header %>
<main>
  <%- page.body %>
</main>
  <% include partials/footer %>
</body>
</html>
```

{partials-p3[Paragraph in 'partials' section]
Considering the example above, we could for example create partial that will be
reusable accross different layouts, ex, consider <fix>`partials/head.ejs`</fix> with
content below:
}

```HTML
<link rel="stylesheet" type="text/css" href="/css/main.css">
<script src="/js/main.js" defer></script>
```

{partials-p4[Paragraph in 'partials' section] 
this snippet now can be used and loaded in the layout by just adding <fix>`<%
include partials/head %>`</fix> into the layout.
}

## {front-matter[Page heading] Front Matter}

{front-matter-p[Paragraph in 'Front Matter' section] 
As was already mentioned Front Matter is not only used for the layout selection,
but it's also possible to define page properties which can be accessed from the
layouts.
}

{front-matter-p2[Paragraph in 'Front Matter' section]
Considering a Front Matter below:
}

```markdown
---
title: About page
showSidebar: true
---
```

{front-matter-p3[Paragraph in 'Front Matter' section] 
Data defined in the Front Matter is accessible from the layout files using page object:
}

```html
<title><%= page.title %></title>
<meta property="og:title" content="{title}">

...
</head>
<body>
...
<%if (page.showSidebar) { %>
  <% include partials/sidebar %>
<% } %>
```

## {helpers[Page heading] Helpers}

{helpers-p[Paragraph in 'Helpers' section] 
There are also some built in helpers in <fix>CMintS</fix> that can be used out
of the box:
}

{helper-tbl-heading1[Helper Table Heading] Helper} | {helper-tbl-heading2[Helper Table Heading] Type} | {helper-tbl-heading3[Helper Table Heading] Description}
--- | --- | ---
page.pathname | {helper-type-var[Helper type] Variable} | <a href="#page.pathname">{helper-desc-path[Helper description] URL path of current page}</a>
page.locale | {helper-type-var} | <a href="#page.locale">{helper-desc-locale[Helper description] Locale of the current page}</a>
page.locales | {helper-type-array[Helper type] Array} | <a href="#page.locales">{helper-desc-locales[Helper description] Other locales that current page is available in</a>}
page.markdown.toc | {helper-type-obj[Helper type] Object} | <a href="#page.markdown.toc">{helper-desc-toc[Helper description] Page's Table Of Content}</a>
i18n.getPageLocales | {helper-type-func[Helper type] Function} | <a href="#i18n.getpagelocales">{helper-desc-getPageLocales[Helper description] Get available locales for a specific page}</a>
i18n.href | {helper-type-func} | <a href="#i18n.href">{helper-desc-href[Helper description] Generate href and hreflang for path. Check if the target path is available in current language otherwise falls back to default language.}</a>
site.queryPages | {helper-type-func} | <a href="#site.querypages">{helper-desc-query-pages[Helper description] Query Array of pages metadata Objects.</a>}

### page.pathname

{helper-desc-path}:

```js
<a <%-i18n.href(item.url)%> <% if (item.url == page.pathname) { %>class="active"<% } %>>
```

### page.locale

{helper-desc-locale}:

```html
<!DOCTYPE html>
<html lang="<%= page.locale %>">
<head>
  <title>...</title>
</head>
<body>
...
```

### page.locales

{helper-desc-locales}:

```html
<!DOCTYPE html>
<html lang="<%= page.locale %>">
<head>
...
<!-- og:locale, og:locale:alternate, rel="canonical" rel="alternate"  -->
<% for (const locale of page.locales) { %>
  <% const localeRegion = site.localeMap[locale] ? site.localeMap[locale].region : locale; %>
  <% if (locale == page.locale) { %>
    <meta property="og:locale" content="<%= localeRegion %>" />
    <link rel="canonical" href="https://<%= site.domain %>/<%= page.pathname %>">
  <% } else { %>
    <meta property="og:locale:alternate" content="<%= localeRegion %>" />
    <link rel="alternate" href="https://<%= site.domain %>/<%= locale %>/<%= page.pathname %>" hreflang="<%= locale %>" />
  <% } %>
<% } %>
</head>
<body>
...
```

### page.markdown.toc

{toc-p[Paragraph in 'Table Of Content' section] 
<fix>`page.markdown.toc`</fix> Object can be used in the ".ejs" to create a
Table Of Content. The Object is a tree where each node corresponds to a markdown
Heading containing id and title of the heading. If the node contain children,
then all children nodes can be accessible by the node's <fix>`children`</fix>
property:
}

```JSON
{
  "children": [
    {
      "id": "ejs",
      "title": "EJS",
      "children": [
        {
          "id": "layout",
          "title": "Layout"
        },
        {
          "id": "body",
          "title": "Body"
        }
        ...
```

{toc-p2[Paragraph in 'Table Of Content' section] 
So, in order to construct a Table Of Content from that variable an EJS snippet
an <fix>`.ejs`</fix> file like the one below can be used:
}

```js
<%/* partials/navigations/toc.ejs */%>

<% if (items) { %>
  <ul>
    <% items.forEach(function(item){ %>
    <li>
        <% if (item.id) { %>
          <a href="#<%= item.id %>"><%= item.title %></a>
        <% } %>
        <% if (item.children) { %>
          <%- include('toc', {items: item.children}) %>
        <% } %>
    </li>
    <% }) %>
  </ul>
<% } %>
```

{toc-p3[Paragraph in 'Table Of Content' section]
Considering the example above, the TOC can be generated by simply calling the
`.ejs` file and passing the `page.markdown.toc` to it, for example:
}

```javascript
<%if (page.
  <aside id="toc">
    <h2>Table of content</h2>
    <%- include('partials/navigations/toc', {items: page.markdown.toc.children}) %>
  </aside>
<% } %>
```

### i18n.getPageLocales

{helper-desc-getPageLocales}

```js
<% const configPageLocales = i18n.getPageLocales("documentation/getting-started/configuration"); %>
<% const homepageLocales = i18n.getPageLocales("index"); %>
<% if (homepageLocales.includes("de")) { %>
  Homepage is available in German
<% } %>
<% if (configPageLocales.includes("es")) { %>
  Config page is available in Spanish
<% } %>
```

### i18n.href

{helper-desc-href}

```js
<a <%-i18n.href("documentation")%> class="button">{get-started[Main button text] Get started}</a>
```

### site.queryPages
{helper-desc-query-pages}

```js
<% let docPages = site.queryPages((data) => data.categories &&
                                          data.categories.includes("documentation")) %>

<% docPages.forEach(function(item) { %>
  <a <%- i18n.href(item.pathname) %>> <%= item.title %> </a>
<% }); %>
```
