---
title: Deployment
description: <fix>CMintS</fix> based project deployment hosting in servies like Github/Gitlab Pages, Netlify and etc. 
navTitleId: nav-doc-title-deployment
showTOC: true
showEdit: documentation/getting-started/deployment.md
categories: [documentation, getting-started]
order: 4
---

## {gh-pages[Page heading] Github pages}

{gh-pages-p[Paragraph in the 'Github pages' section]
<fix>GitHub</fix> Pages is a static site hosting service designed to host
project pages directly from a <fix>GitHub</fix> repository. You can host
<fix>CMintS</fix> projects for free in the <fix>Github</fix> Pages, by simply
running the command below:
}

```bash
cmints --static --deploy
```

## {other-git-hostings[Page heading] Other git based hostings}

{other-git-hostings-p[Paragraph in the 'Other git based hostings' section]
The command in the <fix>Github</fix> pages section, deploys to the `gh-pages`
branch. If you would like to push to another branch of the <fix>git</fix>
repository(not neceseraly <fix>Github</fix> repository) you can do so by
specifying the deployment branch in the [configuration file](/configuration), as
shown in the example below:
}

```js
const deployment =
{
  where: "git",
  branch: "deployment-branch"
};

module.exports = {deployment};
```

## Netlify

{netlify-p1[Paragraph in the 'Netlify' section]
<fix>Netlify</fix> provides Git-triggered continuous integration deployment
hosting, that means it can build and make your website accessible each time your
push changes to the repository.
}

{netlify-p2[Paragraph in the 'Netlify' section]
There are several ways you can use <fix>Netlify</fix>:
}

### {netlify-ci-cd[Page heading] Continuous Deployment}

{netlify-ci-cd-p1[Paragraph in the 'Continuous Deployment' section]
Navigate to the [start page](https://app.netlify.com/start), connect to your
<fix>Git</fix> hosting provider and choose a <fix>CMintS</fix> project
repository.
}

{netlify-ci-cd-p2[Paragraph in the 'Continuous Deployment' section]
Use options below in the building options page:
}

- {netlify-ci-cd-li1[List item in the 'Continuous Deployment' section]
  Branch to deploy - specify the project build branch usually it's the `master`
  branch.
}
- {netlify-ci-cd-li2[List item in the 'Continuous Deployment' section]
  Build command - <fix>`cmints --static`</fix> ([Static site
  generation](/documentation#generate-static-content")).
}
- {netlify-ci-cd-li3[List item in the 'Continuous Deployment' section]
  Publish directory - <fix>`content`</fix> (Default project output directory of
  <fix>CMintS</fix>)
}

### CLI

{netlify-cli-p[Paragraph in the 'CLI' section]
[Netlify’s command line interface](https://www.netlify.com/docs/cli/) lets you
deploy sites or configure continuous deployment straight from the command line.
}

### {netlify-deploy-btn[Page heading] Deploy to Netlify Button}

{netlify-deploy-btn-p1[Paragraph in the 'Deploy to Netlify Button' section]
The [“Deploy to Netlify” button](https://www.netlify.com/docs/deploy-button/)
helps users deploy sites from templates with one single click. It provides web
developers a simple one-click step to let their users deploy those applications
on <fix>Netlify</fix>.
}
