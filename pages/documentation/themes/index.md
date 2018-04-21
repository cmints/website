---
title: Themes
description: Learn theme directory structure, how to create layouts and use LESS to create modularize CSS with less code.
navTitleId: nav-doc-title-overview
topicTitle: nav-doc-title-themes
showDocNav: true
showTOC: true
showEdit: documentation/themes/index.md
showTranslate: 150
---

```bash
src
└── theme
    ├── layouts
    │   ├── default.ejs
    │   └── home.ejs
    ├── less
    │   ├── _footer.less
    │   ├── _header.less
    │   ├── _sidebars.less
    │   ├── _variables.less
    │   ├── index.less
    │   └── main.less
    └── partials
        ├── footer.ejs
        └── header.ejs
```

{theme-p[Paragraph in 'theme' section]
<fix>theme</fix> directory is the place where website layout and less files reside.
<fix>CMintS</fix> uses EJS as a templating language and LESS as a CSS Preprocessor.
}

## layouts

{layouts-p[Paragraph in 'layouts' section] 
<fix>layouts</fix> folder holds different layouts for the website, in some cases you would
like to use diffrent layouts for specific pages, ex.: Homepage may contain more
complex layout rather than the documentations page and Blog page can have a
different layout in same website, for that reason you can define layout for each
page type and select them from actual page using Front Matter. By default the
layout named default.ejs from layouts folder is used. In the example below
home.ejs layout is used for the page:
}

```html
---
layout: home
title: CMS with the internationalization done right
---

# Homepage
This page is using home.ejs layout
```

## less

{less-p[Paragraph in 'less' section] 
<fix>`.less`</fix> files inside of the "less" directory are being processed into the "public/css"
directory, only filenames starting with "_" are not compiled into the target
directory, but yet they can be used by other less files.
}
