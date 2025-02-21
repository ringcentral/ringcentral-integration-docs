# RingCentral Integrations Documentation

![Build](https://github.com/ringcentral/ringcentral-integration-docs/actions/workflows/mkdocs_build.yml/badge.svg)
![Code Samples](https://github.com/ringcentral/ringcentral-integration-docs/actions/workflows/check_code_samples.yml/badge.svg?branch=main)
![Links](https://github.com/ringcentral/ringcentral-integrations-docs/actions/workflows/check_links.yml/badge.svg?branch=main)

This repository is the home of the RingCentral Integration documentation - a collection of user manuals and help content for RingCentral's official documentation. 

## Contributing

If you would like to contribute to the RingCentral documentation effort, fork this repository, make your desired edits and contributions, and issue a pull request accordingly.

### Running the Integration Documentation Site locally

The Integration documentation is built on top of Mkdocs, a self-contained documentation server. Writers are encouraged to install Mkdocs locally so that you can edit files and preview your changes before they are pushed to production servers.

```shell
git clone https://github.com/ringcentral/ringcentral-integration-docs.git
cd ringcentral-integration-docs
pip install mkdocs
pip install -r requirements.txt
mkdocs serve
```

Then you should be able to load <http://localhost:8000> to view the documentation.

