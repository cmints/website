---
title: Front Matter
description: Front Matter is a powerful tool that allows pages to define metadata in the <fix>YAML</fix> format.
navTitleId: nav-doc-title-front-matter
categories: [documentation, pages]
navCategory: documentation
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
<title><%= page.title %></title>
...
</head>
<body>
...
<h1><%= page.title %></h1>
<%if (page.showDocNav) { %>
  <% include partials/docNav %>
<% } %>
...
```

## permalinks

{permalink-p[Paragraph in 'permalinks' section]
Permalink variable can be used to change the URL of the page, the permalink
path will be used to access the page even if you move it's the location in the
<fix>`pages`</fix> directory.
}

```yaml
---
title: First post
permalink: 2018/10/20/first-post
---

My first post
```

{permalink-p2[Paragraph in 'permalinks' section]
The page in the example above will be accessible through
<fix>`2018/10/20/first-post`</fix> url. If the page is translated leading locale
can be used, ex.: <fix>`de/2018/10/20/first-post`</fix>.
}
