---
title: EJS
description: Learn how to create layouts in CMintS. CMintS is using ejs as a templating engine for creating layouts.
showDocNav: true
showTOC: true
showEdit: documentation/themes/ejs.md
showTranslate: 155
---

{ejs-p[Paragraph in "ejs" section]
CMintS is using <a href="http://ejs.co/" target="_blank">EJS</a> as a templating
engine for creating layouts, EJS can also be used for the
[page](/documentation/pages#ejs) creation. EJS is a simple templating language
that lets you generate HTML markup while writing plain JavaScript. Detailed EJS
syntax documentation can be found <a
href="https://github.com/mde/ejs/blob/master/docs/syntax.md"
target="_blank">here</a>, also there is an online playground, to <a
href="https://ionicabizau.github.io/ejs-playground/" target="_blank">try out the
syntax</a>.
}

## {layout[Page heading] Layout}

{layout-p[Paragraph in "Layout" section]
As was mentioned in the [themes overview](/documentation/themes#layouts) in
order to decide which layout to use for the page, a Front Matter "layout"
property needs to be used, which falls back to the default layout.
}

{layout-p2[Paragraph in "Layout" section]
Considering snippet below being `src/theme/layouts/default.ejs`:
}

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="/css/main.css">
</head>
<body>
<main>
  <%- body %>
</main>
</body>
</html>
```

{layout-p3[Paragraph in "Layout" section]
And snippet below being <fix>`src/pages/about.md`</fix>:
}

```markdown
# about
This is the about page
```

{layout-p4[Paragraph in "Layout" section]
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

{layout-p5[Paragraph in "Layout" section]
But if you have another layout, which is located in
<fix>`src/theme/layouts/home.ejs`</fix>, in order to use it you would use Front Matter
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

{body-p[Paragraph in "body" section]
As you might have noticed from the previous example `<%- body %>` placeholder in
the layout ejs is replaced with the actual content, no matter what [page is
used(markdown, html or ejs)](/documentation/pages) actual content of the page is
being rendered and replaces the `<%- body %>` placeholder.
}

## partials

{partials-p[Paragraph in "partials" section]
Partials are EJS layout files that can be loaded into the EJS layouts:
}

```javascript
<% include partialPath %>
<%- include('partialPath', {key: value}) %>
```

{partials-p2[Paragraph in "partials" section]
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
  <%- body %>
</main>
  <% include partials/footer %>
</body>
</html>
```

{partials-p3[Paragraph in "partials" section]
Considering the example above, we could for example create partial that will be
reusable accross different layouts, ex, consider `partials/head.ejs` with
content below:
}

```HTML
<link rel="stylesheet" type="text/css" href="/css/main.css">
<script src="/js/main.js" defer></script>
```

{partials-p4[Paragraph in "partials" section] 
this snippet now can be used and loaded in the layout by just adding `<% include
partials/head %>` into the layout.
}

## {front-matter[Page heading] Front Matter}

{front-matter-p[Paragraph in "Front Matter" section] 
As was already mentioned Front Matter is not only used for the layout selection,
but it's also possible to define page properties which can be accessed from the
layouts.
}

{front-matter-p2[Paragraph in "Front Matter" section]
Considering a Front Matter below:
}

```markdown
---
title: About page
showSidebar: true
---
```

{front-matter-p3[Paragraph in "Front Matter" section] 
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

{helpers-p[Paragraph in "Helpers" section] 
There are also some built in helpers in CMintS that can be used out of the box.
}

### currentPage

{currentPage-p[Paragraph in "currentPage" section] 
The <fix>currentPage</fix> variable represents the path of the URL:
}

```HTML
<a <%-href(item.url)%> <% if (item.url == currentPage) { %>class="active"<% } %>>
```

### {toc[Page heading] Table Of Content}

{toc-p[Paragraph in "Table Of Content" section] 
With the markdown pages "toc" variable in the ".ejs" layouts can be used in
order to create a Table Of Content. The "toc" variable is a tree like object
where each node corresponds to a markdown Heading containing id and title of the
heading. ID for headings are slugyfied and generated automatically. If the node
contain children, then all children nodes can be accessible by the node's
children property:
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

{toc-p2[Paragraph in "Table Of Content" section] 
So, in order to construct a Table Of Content from that variable an EJS snippet can be used as the one below:
}

```javascript
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

{p3[Paragraph in "Table Of Content" section] 
And the snippet can be accessed from the layout using a code below:
}

```javascript
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

```javascript
<%if (page.showDocNav) { %>
  <aside id="toc">
    <h2>Table of content</h2>
    <%- include('partials/toc', {items: toc.children}) %> 
  </aside>
<% } %>
```
