---
title: Crowdin
description: Project integration with <fix>Crowdin</fix>. <fix>Crowdin</fix> synchronization scripts and how to request Open Source setup for free.
showTOC: true
showEdit: documentation/i18n/crowdin.md
categories: [documentation, i18n]
navCategory: documentation
showTranslate: 149
order: 3
---

{crowdin-p[Paragraph in 'Crowdin integration' section]
<a href="https://crowdin.com/" target="_blank" rel="noopener">Crowdin</a> is a localization and
translation management platform. <fix>CMintS</fix> uses it because of it's
user friendly UI, ability to provide external collaborators with user friendly
enviroment for translation and most importantly because it's free for Open
Source projects.
}

## {setting-up[Page heading] Setting up}

{setting-up-p[Paragraph in 'Setting up' section]
First of all in order to be able to use <fix>Crowdin</fix> you should [create an
account](https://crowdin.com/join). If you are developing an open source project
you can request [Open Source
setup](https://crowdin.com/page/open-source-project-setup-request). Otherwise
you will have a trial period to try it out. After you have your account ready,
it's time to [create a project](https://support.crowdin.com/creating-project).
}

{setting-up-p2[Paragraph in 'Setting up' section]
After the project is ready, you need to add Crowdin project ID to i18n options
in the <fix>`config.js`</fix> file. Ensure that you also have
<fix>`defaultLocale`</fix> set there as well:
}

```js
const i18nOptions = {
  defaultLocale: "en",
  crowdin: {
    id: "cmints-website"
  }
};

module.exports = {i18nOptions};
```

## {upload-source-strings[Page heading] Uploading Source Strings}

{upload-source-strings-p[Paragraph in 'Uploading Source Strings' section]
After setting up the project you can use <fix>CMintS</fix> API to upload all the
source translation strings of your website to the <fix>Crowdin</fix> project, to
do that first locate your <fix>Crowdin</fix> project API key from the settings
page:
}

![Crowdin api location](/images/crowdin-key.png)

{upload-source-strings-p2[Paragraph in 'Uploading Source Strings' section]
After locating <fix>Crowdin</fix> API key, run command below from the website
root directory:
}

```bash
# Replace {crowdin-key} with the actual one
cmints --crowdin update-sources --key {crowdin-key}
```

{upload-source-strings-p3[Paragraph in 'Uploading Source Strings' section]
This will generate source JSON files and upload them to the Crowdin project.
}

## {download-translation[Page heading] Download translations}

{download-translation-p[Paragraph in 'Download translations' section]
After translations are ready in the <fix>Crowdin</fix> to be downloaded and the
translation project has been built, run the command below from the website root
directory:
}

```bash
# Replace {crowdin-key} with the actual one
cmints --crowdin get-translations --key {crowdin-key}
```

{download-translation-p2[Paragraph in 'Download translations' section]
**Note:** in order to update correct locales, the directory names inside of the
<fix>`locales`</fix> directory should be consistent with the <fix>Crowdin</fix>
translation [locale names](https://support.crowdin.com/api/language-codes/).
}

## {upload-translation[Page heading] Upload translations}

{upload-translation-p[Paragraph in 'Upload translations' section]
Use command below to update <fix>Crowdin</fix> project with the local
translations:
}

```bash
# Replace {crowdin-key} with the actual one
cmints --crowdin update-translations --key {crowdin-key}
```

## {env-variables[Page heading] Using environment variables}

{env-variables-p[Paragraph in 'Using environment variables' section]
If the environment variables `CROWDIN_KEY` is set, no need to pass the `--key`
argument so you can invoke translation as shown below:
}

```
cmints --crowdin update-sources
cmints --crowdin get-translations
cmints --crowdin update-translations
```
