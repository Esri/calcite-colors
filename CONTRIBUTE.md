# Contributing to calcite-colors

The creative lab is the main contributor as they provide the various colors used by different Esri initatives.

#### Bugs

Create an issue that describes clearly the issue and the reproducible steps.

#### Pull Requests

If you feel the urge to contribute, submit your updates with pull request. 

### How We Use GitHub

All the code for Calcite Colors lives [on GitHub](https://github.com/esri/calcite-colors). We use the [fork and pull model](https://help.github.com/articles/using-pull-requests/) to manage contribution. To contribute, you should:

1. Commit your changes.
2. Note your changes in `CHANGELOG.md`
3. Make sure your copy is up to date: `git pull upstream master`
4. Push your changes to your fork: `/your-username/calcite-colors`
5. Open a pull-request from your fork (`/your-username/calcite-colors`) to the 'upstream' fork (`/Esri/calcite-colors`).


## Releasing a Version
To release a new version of Calcite Colors:
1. Update the `CHANGELOG.md` with documentation about the release. Preserve the existing format.
2. Update the `package.json` with the new version number.
3. From the command line: `$ npm run release`

 
