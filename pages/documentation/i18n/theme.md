---
title: Themes i18n
description: Using translation strings in the themes. Get most out of the CMintS Internationalization(i18n) tools.
navTitleId: nav-doc-title-themes
showDocNav: true
showEdit: true
showTranslate: 154
order: 2
---

{themes-i18n-p[Paragraph in "Themes i18n" section]
In comparison to the regular pages when developing a Theme it's more common to
have translation strings that are consistent accross the website, ex. navigation
items, as it would be very unproductive translating each common string
individually accross the website pages. For that reason translation file
references can be used when accessing strings:
}

```
{string-id(location)}
```

{themes-i18n-p2[Paragraph in "Themes i18n" section]
For example consider there is a `locales/en/navigation/header.json` file which
content is:
}

```json
{
  "menu-item-home": {
    "description": "Header Navigation Name",
    "message": "Home"
  },
  "menu-item-news": {
    "description": "Header Navigation Name",
    "message": "News"
  },
  "menu-item-docs": {
    "description": "Header Navigation Name",
    "message": "Documentation"
  }
}
```

{themes-i18n-p3[Paragraph in "Themes i18n" section]
And also translation file located in `locales/ru/navigation/header.json`:
}

```json
{
  "menu-item-home": {
    "description": "Header manu item",
    "message": "Главное"
  },
  "menu-item-news": {
    "description": "Header manu item",
    "message": "Новости"
  },
  "menu-item-docs": {
    "description": "Header manu item",
    "message": "Документация"
  }
}
```

{themes-i18n-p4[Paragraph in "Themes i18n" section]
In order to access the strings in the files above, you can use translation file
references:
}

```html
<ul>
  <li>
    {menu-item-home(navigation/header)}
  </li>
  <li>
    {menu-item-news(navigation/header)}
  </li>
</ul>
```

{themes-i18n-p5[Paragraph in "Themes i18n" section]
so the example above will be converted for "en" locale into:
}

```html
<ul>
  <li>
    Home
  </li>
  <li>
    News
  </li>
</ul>
```

{themes-i18n-p6[Paragraph in "Themes i18n" section]
And for the "ru" locale into:
}

```html
<ul>
  <li>
    Главное
  </li>
  <li>
    Новости
  </li>
</ul>
```
