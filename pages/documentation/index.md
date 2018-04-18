---
title: Documentation
navTitle: Installation
showDocNav: true
---

# Documentations

## What is CMintS?

<fix>CMintS</fix> is a CMS and Static Content Generator that has been implemented with the
Internationalization in mind. <fix>CMintS</fix> is quite easy to install, it has only few
requirements.

## Requirements

- <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a>
- <a href="https://git-scm.com/" target="_blank">Git</a>

If you have both requirements in place, please follow this installation steps.

## Installing Git

- Mac: <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git#_installing_on_mac" target="_blank">Using Xcode Command Line
  Tools</a>
- Windows: Get <a href="https://git-scm.com/download/win" target="_blank">git for windows</a>
- Linux (Ubuntu, Debian): `sudo apt-get install git-core`

## Installing Node.js

Get Node.js from the <a href="https://nodejs.org" target="_blank">https://nodejs.org/</a>.

## Install CMintS

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

### Example projects

In order to have quick start it's recommended to generate example project by running:
```bash
npm run example
```

The example project is the content of current website, which can also be found
in the <a href="https://github.com/Manvel/cmints-website" target="_blank">github</a>.

The generated project will be placed in the `src` directory. See
[structures](/documentation/getting-started/structure) documentation for more
information about the direcotry structure.

### Starting server

For the development purposes Use `--no-cache` flag to disable the caching.

```bash
npm start -- --no-cache
npm start # will cache pages, use it for production
```
### Generating static content

Run commands below in order to generate static content
```bash
npm start
npm run static
```
