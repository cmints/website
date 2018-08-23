---
title: Internationalization
description: Learn how to use internationalization strings in <fix>CMintS</fix> project. Usage of i18n strings, learn about translation files structure and start creating multilanguage websites.
navTitleId: nav-doc-title-overview
topicTitle: nav-doc-title-i18n
showTOC: true
showEdit: documentation/i18n/index.md
categories: [documentation, i18n]
showTranslate: 156
order: 0
---

{i18n-p1[Paragraph in 'internationalization' section]
Internaltionalization is one of the core features of <fix>CMintS</fix>. The idea
behind is to use common structure and syntax in content pages, themes and
provide additional helpers for multilanguage website management.
}

## {locales-dir-structure[Page heading] Locales directory structure}

{locales-dir-structure-p[Paragraph in 'Locales directory structure' section]
Locale files should be located in the <fix>`src/locales`</fix> directory:
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

{locales-dir-structure-p2[Paragraph in 'Locales directory structure' section]
Top level directories in the <fix>`src/locales`</fix> are the locale codes.
Actual directory structure reflects the page path, so for example translations
for the <fix>`about/teams.md`</fix> [page](/documentation/pages) translations
should be located in <fix>`/de/about/teams.json`</fix> file to be accessible
through <fix>`/de/about/teams`</fix> website path.
}

## {locale-file[Page heading] Locale file}

{locale-file-p[Paragraph in 'Locale file' section]
Locale files hold list of the translations strings, the translation strings
consist of stringid, message and optional description.
}

```json
{
  "heading-main": {
    "description": "Heading of the main page",
    "message": "Заголовок"
  },
  ...
}
```

## {translation-strings[Page heading] Translation strings}

{translation-strings-p[Paragraph in 'Translation strings' section]
The translation strings can be defined in the source files by placing them
inside of opening and closing curly braces. Translation string consist of
stringId, optional description and source text:
}

```javascript
{stringId[Description] Source text}
```

{translation-strings-p2[Paragraph in 'Translation strings' section]
So for example considering the <fix>**ru**</fix> locale in [Locale
file](#locale-file) and translation string below:
}

```html
{heading-main[Heading of the main page] Heading}
```

{translation-strings-p3[Paragraph in 'Translation strings' section]
Will be converted to <fix>`Heading`</fix> for the source(default) locale and to
<fix>`Заголовок`</fix> for the russian locale.
}

### {defining-path[Page heading] Defining the path}

{defining-path-p[Paragraph in 'Defining the path' section]
In order to use translation string from a specific path rather than defining
source text in the page content, it's possible to define the file path next to
the stringID:
}

```html
{menu-item-about(menu/header)}
```

{defining-path-p2[Paragraph in 'Defining the path' section]
The expression above means - use string with the ID <fix>**menu-item-about**</fix>
from the <fix>`%locale%/menu/header.json`</fix> files:
}

```json
/* /en/menu/header.json */
{
  "menu-item-about": {
    "description": "Menu item label",
    "message": "about us"
  }
}
```
```json
/* /ru/menu/header.json */
{
  "menu-item-about": {
    "description": "Menu item label",
    "message": "о нас"
  }
}
```

```
// Translation expression
{menu-item-about(menu/header)}
```

{defining-path-p3[Paragraph in 'Defining the path' section]
Considering the <fix>**en**</fix> and <fix>**ru**</fix> locales above, the
translation expression will be converted to <fix>`about us`</fix> for the
<fix>**en**</fix> locale and to the <fix>`о нас`</fix> for the <fix>**ru**</fix>
locale.
}

### {using-tags[Page heading] Using tags}

{using-tags-p[Paragraph in 'Using tags' section]
Current tags <fix>`a, img, p, span, div, em, i, b, strong`</fix> can be used by
default in the translation strings, ex:
}

```html
{stringId[Description] My awesome <em>source text</em> goes here}
```

#### \<a\>

{a-tag-p[Paragraph in '<a> tag' section]
Order of the links inside of the translaton strings can be different depending
on the language, for that reason the order in the locale file string need to be
defined, so considering the translation string below:
}

```html
{paragraph-1 This is <a href="https://www.example1.com">first link</a>, <a href="/random1">second link</a> and <a href="/random2">third link</a>}
```

{a-tag-p2[Paragraph in '<a> tag' section]
And Locale file with the translation string:
}
 
 ```json
{
  "paragraph-1": {
    "description": "Paragraph with several links",
    "message": "Это <a2>вторая ссылка</a2>, <a1>первая</a1> и <a3>третья ссылка</a3>"
  },
  ...
}
```

{a-tag-p3[Paragraph in '<a> tag' section]
The result will be the one below:
}

```html
Это <a href="/en/random1" hreflang="en">вторая ссылка</a>, <a href="https://www.example1.com">первая</a> и <a href="/en/random2" hreflang="en">третья ссылка</a>
```

{a-tag-p4[Paragraph in '<a> tag' section]
**Note:** The <fix>`hreflang`</fix> attribute will be set automatically
depending on whether the relative link target is translated to the language or
not.
}

#### \<fix\>

{fix-tag-p[Paragraph in 'fix tag' section]
Some words do not suppose to be translated in the website(ex: brand names), for
that reason <fix>`<fix>`</fix> tag can be used:
}

```html
{fixed-id <fix>CMintS</fix> uses <fix>fix</fix> tag}
```

{fix-tag-p2[Paragraph in 'fix tag' section]
and the locales below:
}

 ```json
"fixed-id": {
  "message": "<fix2> тэг используется <fix1>-ом"
}
```

{fix-tag-p3[Paragraph in 'fix tag' section]
Will result into:
}

```html
fix тэг используется CMintS-ом
```

#### \<img\>

{img-tag-p[Paragraph in '<img> tag' section]
Similar to the <fix>`<a>`</fix> and <fix>`<fix>`</fix> tags <fix>`<img>`</fix>
tag also should keep it's order in the translation strings, so for:
}

```html
{test-img1 This is <img href="/first.png"> and <img href="/second.png"> image}
```

{img-tag-p2[Paragraph in '<img> tag' section]
and the locales below:
}

 ```json
"test-img1": {
    "description": "Test images order",
    "message": "Это <img2> картинка и <img1>"
}
```

{img-tag-p3[Paragraph in '<img> tag' section]
will result into:
}

```html
Это <img href="/second.png"> картинка и <img href="/first.png">
```

#### {title-alt-attr[Page heading] title and alt attributes}

{title-alt-attr-p[Paragraph in 'title and alt attributes' section]
Some attributes are also suppose to be translated in different languages, so
that attributes can also be used in the translation string tags:
}

```html
{test-attribute1 <div title="Website Logo" id="logo"><img src="/random/path" alt="Jumping puma" />Picture</div>}
```

{title-alt-attr-p2[Paragraph in 'title and alt attributes' section]
and the locales below:
}

 ```json
"test-img1": {
    "description": "Test images order",
    "message": "<div1 title='Логотип сайта'><img1 alt='Пума в прыжке'>Картинка</div1>"
}
```

{title-alt-attr-p3[Paragraph in 'title and alt attributes' section]
will result into:
}

```html
<div title="Логотип сайта" id="logo"><img src="/random/path" alt="Пума в прыжке" />Картинка</div>
```
