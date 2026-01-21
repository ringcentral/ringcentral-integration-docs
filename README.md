# RingCentral Integration Docs

This repository contains the documentation for the RingCentral Integration Apps.

## Local Development

The site is build using [Mkdocs](https://www.mkdocs.org/) and [Mkdocs Material](https://squidfunk.github.io/mkdocs-material/).

Make sure you have python3 installed.

Then install the dependencies. Assuming that you have not override the default python3 path, you can install the dependencies by running the following command.

```bash
pip3 install -r requirements.txt
```

Then you can run the development server by running the following command.

```bash
mkdocs serve
```

See [LOCAL-SETUP.md](LOCAL-SETUP.md) for detailed instructions if needed.

## Contribution

1. Forking is not required. You can just clone the repository and start contributing.
2. Please always create a new branch from the main branch and create merge-requests to the main branch.

See [CONTRIBUTION.md](CONTRIBUTION.md) for more details.

## Publishing

1. Make sure all the required MRs are merged.

2. On your local repo, switch back to the main branch:

```bash
git checkout main
```

1. Now we want to make sure that the local main is up to date:

```bash
git pull --rebase
```

1. You can check the commit logs to make sure:

```bash
git log
```

1. Hit `Q` to quit the commit log view.

2. Now we're ready to publish.

3. First check the existing tags:

```bash
git tag
```

1. The tags should be in the format `publish-yyyy-MON-dd`. But the CI only checks for `publish-*`.

2. Add a new tag by using the following, just use the current date. Add additional dashes and numbers if publishing multiple times a day:

```bash
git tag publish-year-MON-dd
```

1. Lastly, push the new tag:

```bash
git push --tags
```

That will trigger the CI in GitLab to sync the tagged version to GitHub, and then GitHub CI will publish to GitHub Pages.

## Plans

1. Start with a basic site structure
2. Publish the site to github pages
3. Enhance the gitlab repo to allow internal only contents
4. Create public site preparation scripts to push public only content to github
5. Work with CFI team to create a process to allow internal contents to be referenced

## TODO

- [ ] Submit SEO results to RC main support site
- [ ] Create a process to build internal contents
- [ ] Create a process to build public contents
