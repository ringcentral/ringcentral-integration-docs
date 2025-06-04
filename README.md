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
