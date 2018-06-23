---
title: Pages
description: Use translation strings while writing your content in <fix>Markdown</fix>, <fix>ejs</fix> or <fix>HTML</fix>. Get most out of the <fix>CMintS</fix> Internationalization(i18n) tools.
navTitleId: nav-doc-title-pages
showDocNav: true
showTOC: true
showEdit: documentation/i18n/pages.md
showTranslate: 152
order: 1
---

{pages-p[Paragraph in 'Pages' section]
In order to make a content translatable the [translation
blocks](/documentation/i18n) should be used, below you can find several examples
of using translation strings in different page types:
}

## Markdown

```html
# {about-us[Heading about us] About Us}
{about-us-p1[First paragraph of in  About Us section] My awesome <em>source text</em> goes here}
{about-us-p2[Second paragraph of in  About Us section] Another awesome <em>source text</em> goes here}
```

## HTML

```html
<h1>{about-us[Heading about us] About Us}<h1>
<p>{about-us-p1[First paragraph of in  About Us section] My awesome <em>source text</em> goes here}</p>
<p>{about-us-p2[Second paragraph of in  About Us section] Another awesome <em>source text</em> goes here}</p>
```

##  ejs

```html
<%
const paragraphs = ["My awesome <em>source text</em> goes here", 
                    "Another awesome <em>source text</em> goes here"]
%>
<% for (let i = 0; i < paragraphs.length; i++) { %>
  <p>{about-us-p<%= i +1 %>[<%= i +1 %> paragraph of About Us section] <%- paragraphs[i] %>}</p>
<% } %>
```

## {reusing-id[Page heading] Reusing IDs}

{reusing-id-p[Paragraph in 'Reusing IDs' section]
Early defined stringId in the page can be used in multiple places, that's
possible by referencing to the stringId inside of the braces, ex:
}

```html
<p>
  {stringId[Description] My awesome <em>source text</em> goes here}
</p>
<div>
  {stringId}
<div>
```

## {markdown-heading-id[Page heading] Heading IDs in markdown}

{markdown-heading-id-p[Paragraph in 'Heading IDs in markdown' section]
Markdown headers are automatically getting ID set to them, for the future
reference and TOC generation, whenever a translation string is used as a
markdown heading element text translation StringID is used as a header ID,
considering the example below:
}

```html
# {about-us[Heading about us] About Us}
```

{markdown-heading-id-p2[Paragraph in 'Heading IDs in markdown' section]
Actual HTML output of the markdown above will be:
}

```html
<h1 id="about-us">About Us</h1>
```
