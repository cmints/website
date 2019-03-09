---
title: Project structure
description: Structure of the project, learn how organize your project and directory naming.
navTitleId: nav-doc-title-structure
showTOC: true
showEdit: documentation/getting-started/structure.md
categories: [documentation, getting-started]
navCategory: documentation
showTranslate: 151
order: 4
---

{project-structure-p[Paragraph in 'Project structure' section]
<fix>[public](#public), [locales](#locales), [pages](#pages),
[theme](#theme)</fix> are main directories of the project:
}

```
├── public
├── locales
├── pages
├── theme
└── config.js
```
## {project-dirs[Page heading] Project directories}

### public

{public-p[Paragraph in 'public' section]
Serves static content for the website (<fix>CSS, JavaScript, favicon, robots.txt</fix>
and etc.). The content of the folder will be copied into the
<fix>*content*</fix> directory when [generating static
content](/documentation#generate-static-content).
}

### locales

{locales-p[Paragraph in 'locales' section]
<fix>locales</fix> folder holds translation <fix>`.json`</fix> files that
contain i18n strings for multilanguage projects.
}

```bash
locales
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

<a href="/documentation/i18n">
{learn-more(common)}
</a>


### pages
{pages-p[Paragraph in 'pages' section]
Actual content of the website pages goes here and the structure reflects the
path to the page with `index` files points to the actual directory.
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

<a href="/documentation/pages">
{learn-more(common)}
</a>

### theme

{theme-p2[Paragraph in 'theme' section]
Theme of the project, main folders are <fix>`layouts`</fix> where actual website layouts
reside, <fix>`js`</fix> which uses <fix>browserify</fix> to import <fix>JavaScript</fix> modules and <fix>`less`</fix> folder which holds website less files which are compiled into
the <fix>`public/css`</fix> folder:
}

```bash
theme
├── layouts
│   ├── partials
│   │   ├── footer.ejs
│   │   └── header.ejs
│   ├── default.ejs
│   └── home.ejs
├── less
│   ├── _fonts.less
│   ├── _footer.less
│   ├── _grid.less
│   ├── index.less
│   └── main.less
└── js
    ├── _languageSelector.js
    ├── _footerModule.js
    └── main.js
```

<a href="/documentation/themes">
{learn-more(common)}
</a>
