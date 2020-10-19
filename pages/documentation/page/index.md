---
title: Pages
description: Learn about pages structure and how to create pages in <fix>CMintS</fix> using <fix>Markdown</fix>, <fix>ejs</fix> and <fix>HTML</fix>.
navTitleId: nav-doc-title-overview
topicTitle: nav-doc-title-pages
showTOC: true
categories: [documentation, pages]
navCategory: documentation
showEdit: documentation/pages/index.md
showTranslate: 150
order: 0
---

{pages-p[Paragraph in 'Pages' section]
Content of the website goes to the <fix>**pages**</fix> directory. Pages can be
written in <fix>[Markdown](#markdown)</fix>, <fix>[EJS](#ejs)</fix> or
<fix>[HTML](#html)</fix>. The folder structure inside of the pages directory
reflects actual path when the page is requested(unless a
[permalink](/documentation/pages/frontmatter#permalinks) is specified), which means that
considering structure below:
}

```bash
pages
├── about
│   └── team.md
├── about.md
├── documentation
│   ├── getting-started
│   │   ├── configuration.md
│   │   ├── index.md
│   │   └── _structure.md
│   └── i18n
│       ├── index.md
│       └── markdown.md
├── index.ejs
└── news.md
```

{pages-p2[Paragraph in 'Pages' section]
When [the server is running](/documentation#start-server) pages can be accessed
by the URLs below:
}

- <fix>`pages/about/team.md`</fix> -> <fix>`http://localhost:3000/about/team`</fix>.
- <fix>`pages/documentation/i18n/index.md`</fix> -> <fix>`http://localhost:3000/documentation/i18n`</fix>
- <fix>`index.ejs`</fix> -> <fix>`http://localhost:3000`</fix>

## Front Matter

{front-matter-p1[Paragraph in 'Front Matter' section]
[Front Matter](/documentation/pages/frontmatter) helps easily define
matedata(ex.: title, description and etc.) for the page, Ex.:
}

```yaml
---
title: Front Matter
description: Front Matter is a powerful tool for adding metadata to the pages
categories: [documentation, i18n]
showToc: true
---
```

<a href="/documentation/pages/frontmatter">
{learn-more(common)}
</a>

## {types[Page heading] Page types}

{page-type-p[Paragraph in 'Page types' section]
Currently there are 3 type of pages are supported by CMintS:
}

- [Markdown(.md)](#markdown)
- [HTML(.html)](#html)
- [EJS(.ejs)](#ejs)

### Markdown

{markdown-p[Paragraph in 'Markdown' section]
In order to write page content using Markdown, just assign <fix>`.md`</fix>
extension to the file. <fix>CMintS</fix> uses <a href="http://commonmark.org/"
target="_blank" rel="noopener">CommonMark</a> in order to support
<fix>Markdown</fix> pages:
}

```yaml
---
title: About Markdown
description: Markdown is a lightweight markup language with plain text formatting syntax
---

## Subheading of the page

Here goes paragraph for the subheading

- list item1
- list item2
- list item3
```

<a href="http://commonmark.org/help">
{learn-more(common)}
</a>

### ejs

{ejs-p[Paragraph in 'ejs' section]
<fix>ejs</fix> is a templating language and can be used for more complex pages.
In order to create them just assign <fix>`.ejs`</fix> extension to the file.
<fix>ejs</fix> pages can also access page's
[metadata](/documentation/pages/frontmatter) and
[website helpers](/documentation/themes/ejs#helpers).
}

```yaml
---
items: 
  - Apples
  - Oranges
  - Cherries
---

<ul>
<% for (const item of page.items) { %>
  <li><%= item %></li>
<% } %>
</ul>
```

<a href="http://ejs.co/" target="_blank" rel="noopener">
{learn-more(common)}
</a>

### HTML

{html-p[Paragraph in 'HTML' section]
Assign <fix>`.html`</fix> extension to the file in order to write page content
in <fix>HTML</fix>.
}

```html
---
title: About Markdown
description: Markdown is a lightweight markup language with plain text formatting syntax
---

<h2>Subheading of the page</h2>
<p>Here goes paragraph for the subheading</p>
<ul>
  <li>list item1</li>
  <li>list item2</li>
  <li>list item3</li>
</ul>
```

## {draft-pages[Page heading] Draft pages}

{draft-pages-p[Paragraph in 'Draft pages' section]
All page names starting with <fix>`_`</fix> are draft pages, those are only
visible or generated only when <fix>`--draft`</fix> flag is passed to the
server, build or deploy script. Those page will not be accessible otherwise, so
you can make a use of those pages and keep them hidden in the production, while
you and your team can continue working on it.
}
