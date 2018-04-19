---
title: Documentation
navTitleId: nav-doc-title-installation
showDocNav: true
---

# {documentation[Page heading] Documentations}

## {what-is-cmints[Page heading] What is CMintS?}

{what-is-cmints-p[Paragraph in "What is CMintS" section]
<fix>CMintS</fix> is a CMS and Static Content Generator that has been
implemented with the Internationalization in mind. <fix>CMintS</fix> is quite
easy to install, it has only few requirements.
}

## {requirements[Page heading] Requirements}

- <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a>
- <a href="https://git-scm.com/" target="_blank">Git</a>

{requirements-p[Paragraph in "Requirements" section]
If you have both requirements in place, please follow this installation steps.
}

## {installing-git[Page heading] Installing Git}

- Mac: <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git#_installing_on_mac" target="_blank">Using Xcode Command Line
  Tools</a>
- Windows: Get <a href="https://git-scm.com/download/win" target="_blank">git for windows</a>
- Linux (Ubuntu, Debian): `sudo apt-get install git-core`

## {installing-node[Page heading] Installing Node.js}

{installing-node-p[Paragraph in "Installing Node.js" section]
Get Node.js from the <a href="https://nodejs.org" target="_blank">https://nodejs.org/</a>.
}

## {install-cmints[Page heading] Install CMintS}

<a href="https://help.github.com/articles/fork-a-repo/" target="_blank">Fork</a>
or clone the <a href="https://github.com/Manvel/cmints" target="_blank">CMintS
repository</a>:
```bash
git clone https://github.com/Manvel/cmints.git CMintS
cd CMintS
npm i
```

With cloned CMintS repository you will also get current website downloaded, you
can modify existing files, delete or manage the way you want. [Learn more about
folders structure](/documentation/getting-started/structure).

### {example-project[Page heading] Example projects}

{example-project-p[Paragraph in "Example projects" section]
In order to have quick start it's recommended to generate example project by running:
}
```bash
npm run example
```

{example-project-p2[Paragraph in "Example projects" section]
The example project is the content of current website, which can also be found
in the <a href="https://github.com/Manvel/cmints-website" target="_blank">github</a>.
}

{example-project-p3[Paragraph in "Example projects" section]
The generated project will be placed in the `src` directory. See
[structures](/documentation/getting-started/structure) documentation for more
information about the direcotry structure.
}

### {start-server[Page heading] Starting server}

{start-server-p[Paragraph in "Starting server" section]
For the development purposes Use `--no-cache` flag to disable the caching.
}

```bash
npm start -- --no-cache
npm start # will cache pages, use it for production
```
### {generate-static-content[Page heading] Generating static content}

{generate-static-content-p[Paragraph in "Generating static content" section]
Run commands below in order to generate static content
}
```bash
npm start
npm run static
```
