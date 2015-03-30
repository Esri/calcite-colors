# Patterns-Colors
The Patterns Color repo is where we host Esri's official color documentation that can be see on the forth coming Patterns.esri.com site.  Currently the repo contains a mixture of CSS, SASS and Stylus files tha you can use in your projects.

Feel free to download the files for use in your project or add a refrence in your files that points to the CDN files `CDN Link Coming Soon`.  Also feel free to use a `Submodule` to import these files into your project.

## SASS Variables file
A [SASS](http://sass-lang.com/) variables file can be found in the SCSS folder `scss/variables.scss`.  To learn how to use `Variable` files within SASS please read [USING SASS Variables](http://sass-lang.com/guide#topic-2).

## Stylus Variables file
A [Stylus](http://learnboost.github.io/stylus/) variables file can be found in the Styus folder `stylus/variables.scss`. To learn how to use `Variable` files within Styus please read [USING Styus Variables](http://learnboost.github.io/stylus/docs/variables.html).

## To use CSS
A set of CSS reference files have been added to the CSS folder:
- `css/brand_colors.css`
- `css/calcite_core_colors.css`
- `css/calcite_gray_colors.css`
- `css/calcite_highlight_colors.css`
- `css/calcite_vibrant_colors.css`
- `css/complete.css`  <- all of the above compiled into one file.

Very shortly we will list out a set of URL's from our CDN which can be used in your local projects.

## Patterns JSON Folder
The Patterns JSON folder contains the source files that are used to build the pages on Patterns.esri.com and should NOT be used within a project as they contain lots of information not needed for standalone projects.  These files are created using SCSS.

### Releasing a Version
To release a new version of Patterns Color:
1. Update the `CHANGELOG.md` with documentation about the release. Preserve the existing format.
2. Update the `package.json` with the new version number.
3. From the command line: `$ npm run release`


## Still to do
- [ ] Add Color swatch files for Adobe
- [ ] Add Color PDF file
- [ ] Add link to the CDN

