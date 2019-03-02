---
title: Documentation
description: <fix>CMintS</fix> documentation, what is <fix>CMintS</fix> and how to install it.
navTitleId: nav-doc-title-installation
showTOC: true
showEdit: documentation/getting-started/index.md
categories: [documentation, getting-started]
navCategory: documentation
permalink: documentation
showTranslate: 159
order: 1
---

## {what-is-cmints[Page heading] What is <fix>CMintS</fix>?}

{what-is-cmints-p[Paragraph in 'What is CMintS' section]
<fix>CMintS</fix> is a CMS and Static Site Generator for single and multi
language websites creation. <fix>CMintS</fix> is quite easy to install, it has
only few requirements.
}

{what-is-cmints-p3[Paragraph in 'What is CMintS' section]
**Note:** If you would like to deploy your first app to the web without installing
<fix>CMintS</fix> globally, check [Quick Start](/quick-start) guide.
}

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
```bash
# {example-project-comment1[Comment in 'Example projects' section's code block] Generates single language project}
cmints --example single

# {example-project-comment2[Comment in 'Example projects' section's code block] Generates multi-language project}
cmints --example multi

# {example-project-comment3[Comment in 'Example projects' section's code block] Generates multi-language project in the \{PATH\} directory.}
cmints {PATH} --example
```

{example-project-p2[Paragraph in 'Example projects' section]
You can find content of the example projects below:
}

- {example-project-li1[List item in 'Example projects' section]
  Single language - [GitHub](https://github.com/cmints/single-lang-starter),
  [Online](https://single.cmints.io/).
}
- {example-project-li2[List item in 'Example projects' section]
  Multi-language - [GitHub](https://github.com/cmints/multi-lang-starter),
  [Online](https://multi.cmints.io/).
}

### {start-server[Page heading] Starting server}

#### {start-server-production[Page heading] For the production:}

```bash
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

```bash
# {development-server-commen1[Comment in 'For development' section's code block] Run http server serving current folder Use --no-cache flag to disable the caching}
cmints --start --no-cache

# {development-server-commen2[Comment in 'For development' section's code block] Replace optional \{PATH\} with the path to the folder you wish to serve}
cmints {PATH} --start --no-cache
```

### {generate-static-content[Page heading] Generating static content}

{generate-static-content-p[Paragraph in 'Generating static content' section]
Run one of the command below in order to generate static content
}
```bash
# {static-content-generation-comment1[Comment in 'Generating static content' section's code block] Generate static content of current directory}
cmints --static

# {static-content-generation-comment2[Comment in 'Generating static content' section's code block] Replace optional \{PATH\} with the path to the project for content generation}
cmints {PATH} --static
```
