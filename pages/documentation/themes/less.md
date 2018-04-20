---
title: Less
description: Use LESS to create modularize CSS with less code for CMintS themes.
showDocNav: true
showEdit: true
showTranslate: true
---

{less-p[Paragraph in "less" section] 
Less is a backwards-compatible language extension for CSS. It's quite easy start
writing Less files, because it looks just like CSS. Less files are located in
src/theme/less folder and all less files that are do not have starting `_` in
the filename ex.: `_variables.less` are being compiled into the "public/css"
directory and assigned `.css` extension to a filename.
}

{less-p2[Paragraph in "less" section]
Consider:
}
```less
/* src/theme/_variables.less */
@primary: #728448;
@secondary: #49551c;
```

{less-p3[Paragraph in "less" section]
And:
}

```less
/* src/theme/main.less */
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

{less-p4[Paragraph in "less" section]
Will be converted into:
}

```css
/* src/public/main.css */
a {
  color: #728448;
}
a:hover {
  color: #49551c;
}
```
{less-p5[Paragraph in "less" section]
**Note:** That no `src/public/_variables.css` is generated because the file starts
with `_` sign.
}

{less-p6[Paragraph in "less" section]
To learn more about LESS visit <a href="http://lesscss.org/" target="_blank">
http://lesscss.org/</a>.
}
