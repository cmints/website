---
title: Pages
description: Learn about pages structure and how to create pages in <fix>CMintS</fix> using <fix>Markdown</fix>, <fix>ejs</fix> and <fix>HTML</fix>.
navTitleId: nav-doc-title-overview
topicTitle: nav-doc-title-pages
showTOC: true
categories: [documentation, pages]
showEdit: documentation/pages/index.md
showTranslate: 150
order: 0
---

{pages-p[Paragraph in 'Pages' section]
Content of the website goes to the <fix>**pages**</fix> directory. Pages can be
written in <fix>[Markdown](#markdown)</fix>, <fix>[EJS](#ejs)</fix> or
<fix>[HTML](#html)</fix>. The folder structure inside of the pages directory
reflects actual path when the page is requested(unless a
[permalink](/documentation/pages#permalinks) is specified), which means that
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
│   │   └── structure.md
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
{front-matter-p2[Paragraph in 'Front Matter' section]
Learn more about <fix>Front Matter</fix>.
}
</a>

## Markdown

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
{markdown-p2[Paragraph in 'Markdown' section]
Learn more about <fix>Markdown</fix> syntax.
}
</a>


## ejs

{ejs-p[Paragraph in 'ejs' section]
<fix>ejs</fix> is a templating language and can be used for more complex pages.
In order to create them just assign <fix>`.ejs`</fix> extension to the file.
<fix>ejs</fix> pages can also access page's metadata.
}

<a href="http://ejs.co/" target="_blank" rel="noopener">
{ejs-p2[Paragraph in 'ejs' section]
Learn more about <fix>ejs</fix>.
}
</a>

## HTML

{html-p[Paragraph in 'HTML' section]
If you are reading this page you probably already familiar with HTML and you
most probably used it for your website or you might be familiar with some common
tags and terms. You should mostly cover your needs by Markdown and EJS for the
complex pages, but sometimes you might have a ready HTML page which you would
like to include as a page content in that case just assign <fix>`.html`</fix>
extension to the file.
}
