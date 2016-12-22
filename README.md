# Calcite Colors
The Calcite Colors repo is where we host Esri's official color documentation that can be see on [Calcite Web](http://esri.github.io/calcite-web/). Currently the repo contains a mixture of CSS, SASS and Stylus files that you can use in your projects.

Feel free to download the files for use in your project or add a reference in your files that points to the CDN CSS file [Complete CSS Color File](https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/css/color/complete.css).  Also feel free to use a `Submodule` to import these files into your project.

## Color reference files
The following links are to download .ase swatch files for use in Adobe Products such as Photoshop and Illustrator.

- [Brand Color Palette PDF](https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/calcite_color_pdfs/Brand_Color_Palette.pdf)
- [Brand-Primary Swatches](https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/color_swatch_files/Swatches_Brand_Primary.zip)
- [Brand-Supportive Swatches](https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/color_swatch_files/Swatches_Brand_Supportive.zip)


## SASS Variables file
A [SASS](http://sass-lang.com/) variables file can be found in the SCSS folder `scss/variables.scss`.  To learn how to use `Variable` files within SASS please read [USING SASS Variables](http://sass-lang.com/guide#topic-2).

## Stylus Variables file
A [Stylus](http://learnboost.github.io/stylus/) variables file can be found in the Stylus folder `stylus/variables.scss`. To learn how to use `Variable` files within Stylus please read [USING Stylus Variables](http://learnboost.github.io/stylus/docs/variables.html).

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
The Patterns JSON folder contains the source files that are used to build the pages on [Calcite Web](http://esri.github.io/calcite-web/) and should NOT be used within a project as they contain lots of information not needed for standalone projects.  These files are created using SCSS.


# Contributing to Calcite Colors

Installing Calcite Colors was designed to be fairly painless. If you have any problems, be sure to [submit an issue](https://github.com/Esri/calcite-colors/issues/).

### Fork the Repository

All the code for Calcite Colors lives [on GitHub](https://github.com/esri/calcite-colors). We use the [fork and pull model](https://help.github.com/articles/using-pull-requests/) to manage contribution.

1. Fork the repository so you have your own copy (`your-username/calcite-colors`)
2. Clone the repo locally with `git clone https://github.com/your-username/calcite-colors`
3. Move into the clone repo:  `cd calcite-colors`

You should also add `Esri/calcite-colors` as a remote at this point. We generally call this remote branch 'upstream':

```
git remote add upstream https://github.com/Esri/calcite-colors
```

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

[](Esri Tags: Calcite Colors CSS Sass Web Framework JavaScript)
[](Esri Language: CSS)


