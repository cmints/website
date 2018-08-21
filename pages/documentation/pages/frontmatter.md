---
title: Front Matter
description: Front Matter is a powerful tool that allows pages to define metadata in the <fix>YAML</fix> format.
navTitleId: nav-doc-title-front-matter
showDocNav: true
categories: [documentation, pages]
showEdit: documentation/pages/frontmatter.md
showTranslate: 157
order: 1
---

{front-matter-p[Paragraph in 'Front Matter' section]
Front Matter is a powerful tool that allows pages to define metadata in the
<fix>YAML</fix> format, metadata defined in page can be used by the theme and
accessed through <fix>`page`</fix> variable. Considering metadata defined below:
}

```yaml
---
title: Front Matter
navTitleId: Front Matter
showDocNav: true
---
```

{front-matter-p2[Paragraph in 'Front Matter' section]
You can now use page metadata to adjust theme and page accordingly:
}

```
<html>
<head>
...
<title><%= site.title %></title>
...
</head>
<body>
...
<h1><%= site.title %></h1>
<%if (page.showDocNav) { %>
  <% include partials/docNav %>
<% } %>
...
```