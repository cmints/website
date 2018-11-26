---
title: Less
description: Use <fix>LESS</fix> to create modularize <fix>CSS</fix> with less code for <fix>CMintS</fix> themes.
categories: [documentation, themes]
showEdit: documentation/themes/less.md
showTranslate: 160
order: 2
---

{less-p[Paragraph in 'less' section] 
Less is a backwards-compatible language extension for CSS. It's quite easy start
writing Less files, because it looks just like CSS. Less files are located in
theme/less folder and all less files that don't have starting `_` in
the filename ex.: `_variables.less` are being compiled into the "public/css"
directory and assigned `.css` extension to a filename.
}

{consider(common)}

```less
/* theme/less/_variables.less */
@primary: #728448;
@secondary: #49551c;
```

{and(common)}

```less
/* theme/less/main.less */
@import "_variables.less";

a
{
  &:hover
  {
    color: @secondary;
  }
  color: @primary;
}
```

{less-p4[Paragraph in 'less' section]
Will be converted into:
}

```css
/* public/css/main.css */
a {
  color: #728448;
}
a:hover {
  color: #49551c;
}
```
{less-p5[Paragraph in 'less' section]
**Note:** That no `public/_variables.css` is generated because the file starts
with `_` sign.
}

{less-p6[Paragraph in 'less' section]
To learn more about LESS visit <a href="http://lesscss.org/" target="_blank" rel="noopener">
http://lesscss.org/</a>.
}
