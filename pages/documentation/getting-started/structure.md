---
title: Project structure
description: Structure of the project, learn how organize your project and directory naming.
navTitleId: nav-doc-title-structure
showDocNav: true
showTOC: true
showEdit: documentation/getting-started/structure.md
showTranslate: 151
---

{project-structure-p[Paragraph in 'Project structure' section]
The project structure is straighforward, the website related files are located
in src folder, so this is the folder where your website/project will be located.
}
```
src
├── public
├── locales
├── pages
└── theme
    ├── less
    ├── partials
    └── layouts
          ├── default.ejs
          └── home.ejs
```

## {public[Page heading] public}

{public-p[Paragraph in 'public' section]
Stores all the static content of the website. Good example is CSS files, Fonts,
JS, favicon, robots.txt and etc. By default CSS folder is used as the
compilation target directory for `.less` files. The content of the folder will
be copied to the *content* directory after static content generation.
}

## {locales[Page heading] locales}

{locales-p[Paragraph in 'locales' section]
Holds pages and themes language specific data in `.json` format for each locale:
}

```bash
├── de
│   ├── about.json
│   └── news.json
├── en
│   ├── about.json
│   ├── header.json
│   └── news.json
└── ru
    ├── about
    │   └── team.json
    ├── about.json
    ├── documentation
    │   ├── getting-started
    │   │   └── configuration.json
    │   └── i18n
    │       └── index.json
    ├── header.json
    ├── index.json
    └── news.json
```
{locales-p2[Paragraph in 'locales' section]
The folder names should reflect the `locales` value, set in the configuration
file. `.json` reflect the path to the page, similar to the structure inside of
the `pages` directory. [See](/documentation/i18n) for more information about the
i18n files.
}

## {pages[Page heading] pages}
{pages-p[Paragraph in 'pages' section]
Actual content of the website goes here and the structure reflects the path to
the page with `index` files points to the actual directory:
}

```bash
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

{pages-p2[Paragraph in 'pages' section]
Supported page content files are:
}

extention | Descriptio
--- | ---
`.md` | Markdown files, use<a href="http://commonmark.org/" target="_blank" rel="noopener">CommonMark</a> to create markdown content. Learn more about writing markdown in <fix>CMintS</fix> <a href="/documentation/pages#markdown" target="_blank" rel="noopener">here</a>.
`.ejs` | For more robust pages you can use <a href="http://ejs.co/" target="_blank" rel="noopener">EJS</a> for creating a complex page content. Learn more about creating ejs pages in <fix>CMintS</fix> <a href="/documentation/pages#ejs" target="_blank" rel="noopener">here</a>.
`.html` | HTML files

## {theme[Page heading] theme}

{theme-p[Paragraph in 'theme' section]
Theme of the project, main folders are <fix>`layouts`</fix> where actual website layouts
reside and <fix>`less`</fix> folder which holds website less files which are compiled into
the <fix>`public/css`</fix> folder:
}

```bash
├── layouts
│   ├── partials
│   │   ├── footer.ejs
│   │   └── header.ejs
│   ├── default.ejs
│   └── home.ejs
└── less
    ├── _fonts.less
    ├── _footer.less
    ├── _grid.less
    ├── index.less
    └── main.less
```