# Calcite Colors

![saturated color wheel](https://raw.githubusercontent.com/Esri/calcite-colors/master/resources/saturated-graph.png)

The calcite-colors repository is where we host Esri's official color documentation that can be seen and is leveraged by [Calcite Web](http://github.com/Esri/calcite-web/). Currently, this repository contains a SASS file that you can use in your projects.

## Color reference files
The following links are to download the .ase swatch for use in Adobe products such as Adobe Photoshop and Adobe Illustrator. Additionally, there is a PDF download of the visual reference color palette.

- [Adobe .ase](https://github.com/Esri/calcite-colors/raw/master/resources/colors.ase)
- [Color palette PDF](https://github.com/Esri/calcite-colors/raw/master/resources/colors.pdf)

## SASS Variables file
A [SASS](http://sass-lang.com/) variables file can be found in the root directory `colors.scss`.  This is the main source to consume the color variables.

## ES6 Export
In a modern javascript environment you can import the colors via ES6 import:

```js
import colors from "@esri/calcite-colors/colors.js";

console.log(colors["ui-blue"]); // => "#007ac2"
```

## JSON file
A simple JSON file is also included in the root directory `colors.json`. This file includes a simple object containing every color of the palette as key value pairs.

## UI Colors
In both the SASS and JSON file are UI Color variables. These variables should be the standard usage of color for most applications. They'll serve as an easy way for users to grab the main usage colors, as well as staying consistent across applications. They include both Light and Dark theme variables. Dark theme variables have `-dark` appended. For example, the primary blue color in light theme is `$ui-blue`. In dark theme the primary blue is `$ui-blue-dark`. Additionally, both light and dark include variables for hover and pressed states (`$ui-blue-hover`, `$ui-red-pressed`) For more information and best practices visit the [Calcite Design System](https://calcite.esri.com) website [color section](https://calcite.esri.com/colors).

## Colors naming anatomy
![colors naming anatomy](https://raw.githubusercontent.com/Esri/calcite-colors/master/resources/colors-naming-anatomy.png)

## Licensing
COPYRIGHT © 2019 Esri

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
