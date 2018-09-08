---
title: Documentation
description: <fix>CMintS</fix> documentation, what is <fix>CMintS</fix> and how to install it.
navTitleId: nav-doc-title-installation
showTOC: true
showEdit: documentation/index.md
categories: [documentation, getting-started]
permalink: documentation
showTranslate: 148
order: 1
---

## {what-is-cmints[Page heading] What is CMintS?}

{what-is-cmints-p[Paragraph in 'What is CMintS' section]
<fix>CMintS</fix> is a CMS and Static Site Generator that has been
implemented with the Internationalization in mind. <fix>CMintS</fix> is quite
easy to install, it has only few requirements.
}

{what-is-cmints-p2[Paragraph in 'What is CMintS' section] <strong>Note:</strong>
<fix>CMintS</fix> is under extensive beta development. Contributions in form of
Bugreports, Documentation updates and Content Translations will help to boost
the development speed up. Thanks for stars and word spreading.}❤️

## {install-cmints[Page heading] Requirements and installation}

{install-cmints-p1[Paragraph in 'Install CMintS' section]
Installing CMintS is quite easy, ensure that you have <fix><a
href="https://nodejs.org/en/download/" target="_blank"
rel="noopener">Node.js</a></fix> installed and run the commands below:
}

```bash
npm install -g cmints
```

### {example-project[Page heading] Example projects}

{example-project-p[Paragraph in 'Example projects' section]
In order to have quick start it's recommended to generate example project by
running, one of the commands below:
}
```bash-i18n
# {example-project-comment1[Comment in 'Example projects' section's code block] Download example project into current directory}
cmints --example

# {example-project-comment2[Comment in 'Example projects' section's code block] Replace optional \{PATH\} with the path to the download target directory}
cmints {PATH} --example
```

{example-project-p2[Paragraph in 'Example projects' section]
The example project is the content of current website, which can also be found
in the <a href="https://github.com/Manvel/cmints-website" target="_blank" rel="noopener">github</a>.
}

### {start-server[Page heading] Starting server}

#### {start-server-production[Page heading] For the production:}

```bash-i18n
# {production-server-comment1[Comment in 'For the production' section's code block] Run http server serving current folder}
cmints --start

# {production-server-comment2[Comment in 'For the production' section's code block] Replace optional \{PATH\} with the path to the folder you wish to serve.}
cmints {PATH} --start

# {production-server-comment3[Comment in 'For the production' section's code block] https server: Replace \{PATH\} with the path to the folder you wish to serve}
# {production-server-comment4[Comment in 'For the production' section's code block] Replace \{PRIVATE_KEY\} with the path to the private key file}
# {production-server-comment5[Comment in 'For the production' section's code block] Replace \{CERTIFICATE\} with the path to the certiface file}
cmints {PATH} --start --https -k {PRIVATE_KEY} -c {CERTIFICATE}
```

#### {start-server-development[Page heading] For development:}

```bash-i18n
# {development-server-commen1[Comment in 'For development' section's code block] Run http server serving current folder] Use --no-cache flag to disable the caching}
cmints --start --no-cache

# {development-server-commen2[Comment in 'For development' section's code block] Replace optional \{PATH\} with the path to the folder you wish to serve}
cmints {PATH} --start --no-cache
```

### {generate-static-content[Page heading] Generating static content}

{generate-static-content-p[Paragraph in 'Generating static content' section]
Run one of the command below in order to generate static content
}
```bash-i18n
# {static-content-generation-comment1[Comment in 'Generating static content' section's code block] Generate static content of current directory}
cmints --static

# {static-content-generation-comment2[Comment in 'Generating static content' section's code block] Replace optional \{PATH\} with the path to the project for content generation}
cmints {PATH} --static
```
