---
title: JavaScript Modules
description: Implement <fix>CMintS</fix> Theme's functionality using Node.js-style modules and include the compiled files right into layout.
navTitleId: nav-doc-title-modules
categories: [documentation, themes]
showEdit: documentation/pages/js-modules.md
order: 0
---

{js-modules-p1[Paragraph in 'JavaScript Modules' page]
<fix>CMintS</fix> is using [Node.js-style
modules](https://nodejs.org/api/modules.html) and makes Theme functionality
implementation modular out of the box. All that magic is done using
[browserify](http://browserify.org/).
}

{js-modules-p2[Paragraph in 'JavaScript Modules' page]
JavaScript files that are placed in <fix>`theme/js`</fix> directory and don't
have starting `_` in the filename ex.: <fix>`_contextMenu.js`</fix> are being
compiled into the <fix>`public/js`</fix> directory.
}

{consider(common)}

```js
/* theme/js/_contextMenu.js */
const toggleContextMenu = (buttonElem) =>
{
  const contextMenus = buttonElem.closest(".contextMenu");
  if (contextMenus)
    contextMenus.classList.toggle("visible");
};

module.exports.toggleContextMenu = toggleContextMenu;
```

{and(common)}

```js
/* theme/js/main */
const {toggleContextMenu} = require("./_contextMenu");

document.body.addEventListener("click", (e)=>
{
  toggleContextMenu(e.target);
}, false);
```

{js-modules-p5[Paragraph in 'JavaScript Modules' page]
The example above will be compiled into the <fix>`public/js/main.js`</fix> and
can be included into the Theme's layout:
}

```html
<!DOCTYPE html>
<html lang="<%= page.locale %>">
<head>
  <script src="/js/main.js" defer></script>
</head>
<body>
  ...
```
