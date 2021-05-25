# Calcite Colors

![saturated color wheel](https://raw.githubusercontent.com/Esri/calcite-colors/master/resources/saturated-graph.png)

The calcite-colors repository provides Esri's official color palette including documentation, reference files, and helpers in multiple file formats.

## Color reference files

The following links are to download the .ase swatch for use in Adobe products such as Adobe Photoshop and Adobe Illustrator. Additionally, there is a PDF download of the visual reference color palette.

- [Adobe .ase](https://github.com/Esri/calcite-colors/raw/master/resources/colors.ase)
- [Color palette PDF](https://github.com/Esri/calcite-colors/raw/master/resources/colors.pdf)

## Sass Variables

A [Sass](http://sass-lang.com/) variables file can be found in the root directory `colors.scss`. This is the main source to consume the color variables.

## Sass Theme Mixins

A pair of Sass mixins are available which will return the two themes as CSS custom properties. In this way, you can add css vars to your app if need be:

```scss
@import "@esri/calcite-colors/dist/colors.scss";

:root {
  @include calcite-theme-light();
}

[theme="dark"] {
  @include calcite-theme-dark();
}
```

These colors are then accessible with the `var` syntax:

```css
.my-element {
  border-color: var(--calcite-ui-blue-1);
}
```

## ES6 Export

In a modern javascript environment you can import the colors via ES6 import:

```js
import { colors } from "@esri/calcite-colors/dist/colors";

console.log(colors["ui-blue"]); // => "#007ac2"
```

## UI Colors

In both the Sass and JSON file are UI Color variables. These variables should be the standard usage of color for most applications. They'll serve as an easy way for users to grab the main usage colors so colors stay consistent across applications. They include both Light and Dark theme variables. Dark theme variables have `-dark` appended. Additionally, both light and dark include variables for hover and pressed states (`$ui-blue-2`, `$ui-red-3`).

## Chart Colors

Colors for charts are included as well. These can be used to import colors for charting libraries.

## Colors naming anatomy

![colors naming anatomy](https://raw.githubusercontent.com/Esri/calcite-colors/master/resources/colors-naming-anatomy.png)

## Build instructions

To run a build run `npm run build` within a terminal at the project's root directory. This will compile the Typescript files into JavaScript modules.

**Make sure to run `npm install` has been run before the first time building**

## Licensing

COPYRIGHT © 2021 Esri

All rights reserved under the copyright laws of the United States
and applicable international laws, treaties, and conventions.

This material is licensed for use under the Esri Master License
Agreement (MLA), and is bound by the terms of that agreement.
You may redistribute and use this code without modification,
provided you adhere to the terms of the MLA and include this
copyright notice.

See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english

For additional information, contact:
Environmental Systems Research Institute, Inc.
Attn: Contracts and Legal Services Department
380 New York Street
Redlands, California, USA 92373
USA

email: contracts@esri.com

## Contributing to Calcite Colors

Please read the [contribute document](CONTRIBUTE.md).
