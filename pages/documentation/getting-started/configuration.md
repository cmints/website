---
title: Configuration
description: How to configure <fix>CMintS</fix> and using templateData to pass data to the template.
navTitleId: nav-doc-title-configuration
showTOC: true
showEdit: documentation/getting-started/configuration.md
categories: [documentation, getting-started]
navCategory: documentation
showTranslate: 158
order: 3
---

{config-p[Paragraph in 'Configuration' section]
<fix>`config.js`</fix> is where you can overwrite various website default
configurations:
}

```javascript
const port = {
  https: 4000,
  http: 3000
};

const hostname = "0.0.0.0";

const i18nOptions = {
  defaultLocale: "en",
  crowdin: {
    id: "cmints-website"
  }
};

const templateData =
{
  site: {
    domain: "cmints.io",
    title: "CMintS",
    description: "CMS created with the internationalization in mind"
  }
};

module.exports = {templateData, i18nOptions, port, hostname};
```

{config-p2[Paragraph in 'Page heading' section]
This file suppose to overwrite [default
configurations](https://github.com/cmints/cmints/blob/master/config.js) set by
the <fix>CMintS</fix>.
}

## port

Specifies on which port to run the server, by default it's
<fix><strong>3000</strong></fix> for <fix><strong>http</strong></fix> and
<fix><strong>4000</strong></fix> for <fix><strong>https</strong></fix>.

```js
const port = {
  https: 4000,
  http: 3000
};

module.exports = {port};
```

## hostname

{hostname-p[Paragraph in 'hostname' section]
Specifies the hostname for server to accept connection on, by default
`127.0.0.1` is used.
}

```js
const hostname = "0.0.0.0";

module.exports = {hostname};
```

## root

{root-p[Paragraph in 'root' section]
Specifies the root directory of the website. Makes <fix>CMintS</fix> root
directory aware.
}

```js
const root = "/project-root";

module.exports = {root};
```

## i18nOptions

{i18nOptions-p1[c]
Used only for multilingual projects:
}

```js
const i18nOptions = {
  defaultLocale: "en",
  type: "Index",
  prefix: "{",
  postfix: "}",
  crowdin: {
    id: "cmints-website",
    updateOption: "update_as_unapproved"
  }
};

module.exports = {i18nOptions};
```

### defaultLocale

{defaultLocale-p1[Paragraph in 'defaultLocale' section]
Specifies the default locale for the project. <a
href="/documentation/i18n#default-locale">Learn more about
<fix>defaultLocale</fix></a>.
}

### type

- `Index` ({type-deafult[Default mark] Default})
- `Double`

{type-p1[Paragraph in 'type' section]
There are two ways how the content of multilanguage website can be generated -
by duplicating the content of the page of specific language to have a
redirection path if needed from one of the version(ex.: for redirecting to the
user preffered language) or generating default language content as root in
<fix>`content`</fix> directory. By Default <fix>`Index`</fix> option is used, in
which case only one version of the default language page is generated, on the
other hand <fix>`Double`</fix> allows you to have that duplication where you can
setup for example a redirection by using
[urllocale](documentation/themes/ejs#page.urllocale).
}

{type-p2[Paragraph in 'type' section] 
Example below shows generation for <fix>`about`</fix> page when <fix>`en`</fix>
is the default language:
}

- about.html
- en/about.html `Double`
- de/about/html

#### detectLang

{detectLang-p1[Paragraph in 'detectLang' section]
This option can only be used when running <fix>CMintS</fix> server with <fix>`i18nOptions.type`</fix>
being set to <fix>`Double`</fix>, this setting is using user language preference, set in
the Browser for relevant language page redirection. Setting has no effect on
Static Website Generation.
}

### crowdin.id

{crowdinId-p1[Paragraph in 'crowdin.id' section]
<fix>Crowdin</fix> projectID name. <a href="/documentation/i18n/crowdin">Learn
More about <fix>crowdin.id</fix></a>.
}

### crowdin.updateOption

- **update_as_unapproved**({default(common)}) - {updateOption-li1[List item in 'crowdin.updateOption' section]
  Preserve translations of changed strings and remove validations of those translations if they exist.}
- **update_without_changes** - {updateOption-li2[List item in 'crowdin.updateOption' section]
  Preserve translations and validations of changed strings.}
- **null** - {updateOption-li3[List item in 'crowdin.updateOption' section]
  translations for changed strings will be lost after string update.}

```js
const i18nOptions = {
  defaultLocale: "en",
  crowdin: {
    id: "cmints-website",
    updateOption: null
  }
};
```

### prefix, postfix

{prefix-postfix-p1[Paragraph in 'prefix, postfix' section]
Used for specifing custom prefix and postfix for i18n strings. <a
href="/documentation/i18n#prefix-postfix">Learn More about custom prefix and
postfix</a>.
}

## templateData

{templateData-p1[Paragraph in 'templateData' section]
data and functions in templateData can be accessed from <fix>`.ejs`</fix> pages and layout
files:
}

{consider(common)}

```js
/* config.js */

const templateData =
{
  site: {
    domain: "cmints.io",
    title: "CMintS",
    description: "CMS created with the internationalization in mind",
    navigations: [
      {path: "documentation", stringId: "header-menu-item-docs"},
      {path: "presentation", stringId: "header-menu-item-slides"}
    ]
  }
};

module.exports = {templateData};
```

{templateData-p2[Paragraph in 'templateData' section]
So the specified data above can be accessed as in the example:
}

```html
<!DOCTYPE html>
  <head>
    <title><%= site.title %> | <%= page.title %></title>
    <meta name="twitter:title" content="<%= site.title %> | {page.title}">
  </head>
  <body>
...
```

{or(common)}

```js
<% for (let navigation of site.navigations) { %>
  <li>
    <a <%-i18n.href(navigation.path)%>
      <% if (navigation.path == page.pathname) { %>class="active"<% } %>>
      {<%-navigation.stringId%>(header)}
    </a>
  </li>
<% } %>
```

## jsModuleOptions

{jsModuleOptions-p1[Paragraph in 'jsModuleOptions' section]
Can be used to assign [various existing
options](https://github.com/browserify/browserify#browserifyfiles--opts) to the
[JS Modules](/documentation/themes/js-modules) build process. The example below
shows how to add source map to the generation file for debugging purposes:
}

```js
const jsModuleOptions = {
  debug: true
}

module.exports = {jsModuleOptions};
```

### {minification[Header in 'jsModuleOptions and lessOptions' section] Minification}

{browserify-minification-p1[Paragraph in 'jsModuleOptions > minification' section]
Making output of the JS Modules minified is as simple as specifying <fix>`minify`</fix> option:
}

```js
const jsModuleOptions = {
  minify: true
}

module.exports = {jsModuleOptions};
```

{browserify-minification-p2[Paragraph in 'jsModuleOptions > minification' section]
You can also use various <fix>uglify-es</fix>
[configurations](https://www.npmjs.com/package/uglify-es#minify-options) for [JS
Modules](/documentation/themes/js-modules) minification. The example below adds
<fix>`sourceMap`</fix> to the minified files:
}

```js
const jsModuleOptions = {
  minify: {
    sourceMap: true
  }
}

module.exports = {jsModuleOptions};
```

## lessOptions

{lessOptions-p1[Paragraph in 'lessOptions' section]
Can be used to assign [various
options](http://lesscss.org/usage/#less-options) to the
<fix>CSS</fix> [build process](/documentation/themes/less). The example below
shows how to add source map to the generation file for debugging purposes:
}

```js
const lessOptions =
{
  sourceMap: {
    sourceMapFileInline: true
  }
};

module.exports = {lessOptions};
```

### {minification}

{lessOptions-minification-p1[Paragraph in 'lessOptions > minification' section]
Making output of the [LESS](/documentation/themes/less) minified is as simple as
by specifying <fix>`minify`</fix> option:
}

```js
const lessOptions = {
  minify: true
}

module.exports = {lessOptions};
```

{lessOptions-minification-p2[Paragraph in 'lessOptions > minification' section]
You can also use various <fix>clean-css</fix> [configurations](https://www.npmjs.com/package/clean-css#constructor-options) for [JS
Modules](/documentation/themes/js-modules) minification. The example
below adds <fix>`sourceMap`</fix> to the minified files:
}

```js
const lessOptions = {
  minify: {
    sourceMap: true
  }
}

module.exports = {lessOptions};
```

## configReloadWatchers

<fix>`config.js`</fix> does more than configuration and it's can be used for a robust
action also you can call other modules and/or JSON files from <fix>`config.js`</fix> and
you might not want restart the development server each time you update the other
file, for that reason you can specify <fix>`configReloadWatchers`</fix>:

```
const configReloadWatchers = ["data.json", "syncinit.js"];
module.exports = {configReloadWatchers};
```
