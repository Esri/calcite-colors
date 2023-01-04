# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 6.1.0 - 2023-01-04

### Additions

#### SASS Variables
- `$ui-text-highlight-light` `#bbd5fa`
- `$ui-text-highlight-dark` `#375F95`

#### CSS Variables
- `--calcite-ui-text-highlight`: `#bbd5fa` (light) `#375F95` (dark)

## 6.0.1 - 2021-08-09

#### SASS variable updates

- :warning: `$ui-border-2-light` is now `#d4d4d4` (`$blk-040`)
- :warning: `$ui-border-3-light` is now `#dfdfdf` (`$blk-030`)
- :warning: `$ui-border-1-dark` is now `#555555` (`$blk-160`)
- :warning: `$ui-border-2-dark` is now `#4a4a4a` (`$blk-170`)
- :warning: `$ui-border-3-dark` is now `#404040` (`$blk-180`)

#### CSS variable updates

- Light theme `--calcite-ui-border-2` is now `#d4d4d4` (`$ui-border-2-light`)
- Light theme `--calcite-ui-border-3` is now `#dfdfdf` (`$ui-border-3-light`)
- Dark theme `--calcite-ui-border-1` is now `#555555` (`$ui-border-1-dark`)
- Dark theme `--calcite-ui-border-2` is now `#4a4a4a` (`$ui-border-2-dark`)
- Dark theme `--calcite-ui-border-3` is now `#404040` (`$ui-border-3-dark`)

## 6.0.0 - 2021-01-28
### Breaking Changes

#### SASS variable updates

- :warning: `$ui-blue-1` is now `$ui-brand-light`
- :warning: `$ui-blue-2` is now `$ui-brand-hover-light`
- :warning: `$ui-blue-3` is now `$ui-brand-press-light`
- :warning: `$ui-green-1` is now `$ui-success-light`
- :warning: `$ui-green-2` removed
- :warning: `$ui-green-3` removed
- :warning: `$ui-yellow-1` is now `$ui-warning-light`
- :warning: `$ui-yellow-2` removed
- :warning: `$ui-yellow-3` removed
- :warning: `$ui-red-1` is now `$ui-danger-light`
- :warning: `$ui-red-2` is now `$ui-danger-hover-light`
- :warning: `$ui-red-3` is now `$ui-danger-press-light`
- :warning: `$ui-background:` is now `$ui-background-light`
- :warning: `$ui-foreground-1` is now `$ui-foreground-1-light`
- :warning: `$ui-foreground-2` is now `$ui-foreground-2-light`
- :warning: `$ui-foreground-3` is now `$ui-foreground-3-light`
- :warning: `$ui-text-1` is now `$ui-text-1-light`
- :warning: `$ui-text-2` is now `$ui-text-2-light`
- :warning: `$ui-text-3` is now `$ui-text-3-light`
- :warning: `$ui-border-1` is now `$ui-border-1-light`
- :warning: `$ui-border-2` is now `$ui-border-2-light`
- :warning: `$ui-border-3` is now `$ui-border-3-light`
- :warning: `$ui-border-4` removed
- :warning: `$ui-border-5` removed

_Note: the above also apply to the corresponding dark theme color variables._

#### CSS Variables

- :warning: `--calcite-ui-blue-1` is now `--calcite-ui-brand`
- :warning: `--calcite-ui-blue-2` is now `--calcite-ui-brand-hover`
- :warning: `--calcite-ui-blue-3` is now `--calcite-ui-brand-press`
- :warning: `--calcite-ui-green-1` is now `--calcite-ui-success`
- :warning: `--calcite-ui-green-2` removed
- :warning: `--calcite-ui-green-3` removed
- :warning: `--calcite-ui-yellow-1` is now `--calcite-ui-warning`
- :warning: `--calcite-ui-yellow-2` removed
- :warning: `--calcite-ui-yellow-3` removed
- :warning: `--calcite-ui-red-1` is now `--calcite-ui-danger`
- :warning: `--calcite-ui-red-2` is now `--calcite-ui-danger-hover`
- :warning: `--calcite-ui-red-3` is now `--calcite-ui-danger-press`
- :warning: `--calcite-ui-border-4` removed
- :warning: `--calcite-ui-border-5` removed

### Additions

#### SASS Variables
- `$ui-border-input-light` `#949494`
- `$ui-text-inverse-light` `#ffffff`
- `$ui-text-link-light` `#00619b`
- `$ui-info-light` `#00619b`

_Note: The above also have `-dark` equivalents._

#### CSS Variables
- `--calcite-ui-border-input` `#949494`
- `--calcite-ui-text-inverse` `#ffffff`
- `--calcite-ui-text-link` `#00619b`
- `--calcite-ui-info` `#00619b`

## 5.0.0 - 2020-10-20

- [!breaking change] Moved `/src/colors.scss` file to `/dist/colors.scss`.
- [!breaking change] Renamed const exports from `colors.ts` to be lowercased.

## 4.0.1 - 2020-10-14

- Update readme documentation.

## 4.0.0 - 2020-10-13

- [!breaking change] Moved `colors.scss` file to `/src/colors.scss`.
- [!breaking change] Moved `colors.ts` file to `/src/colors.ts`.
- [!breaking change] Removed `colors.json` file. The project's new "main" file is `/dist/colors.js`.
- [!breaking change] Combined colors and chart colors.
- Added multiple module output formats.

## 3.0.1 - 2020-10-07

- Remove 'postinstall' npm script.

## 3.0.0 - 2020-10-06

- [!breaking change] Moved `colors.json` and `colors.js` to the `dist/` folder.
- Add charting colors.
- Add build for compiling TypeScript files to JS and JSON.

## 2.1.0 - 2020-03-19

- Added mixins for css custom property generation of light and dark theme

## 2.0 - 2020-03-17

- [!breaking change] Changed all idle, hover, and press variables to 1,2,3 (borders use 1,2,3,4,5)

## 1.7.1 - 2020-01-03

- Add type definitions for new ES6 export for TS users

## 1.7.0 - 2020-01-03

- Add ES6 module format

## 1.6.0 - 2019-12-05

- updated nomenclature for pressed to press. Keep consistent with hover/press vs hovered/pressed.
- Added border color values for light and dark theme. border 1, 2, 3, hover, and press states.

## 1.5.0 - 2019-10-18

- Added dark theme variables:

```
// Dark Theme Colors
$d-bb-410: #47BBFF;
$d-bb-420: #00A0FF;
$d-bb-430: #0087D7;
$d-gg-410: #44ED51;
$d-gg-420: #36DA43;
$d-gg-430: #11AD1D;
$d-yy-410: #FFE24D;
$d-yy-420: #FFC900;
$d-yy-430: #F4B000;
$d-rr-410: #FF7465;
$d-rr-420: #FE583E;
$d-rr-430: #F3381B;
```

- Updated dark theme yellow pressed:

`$ui-yellow-pressed-dark: $d-yy-410;`

- Comment typo fixes

## 1.4.1 - 2019-08-30

- Fixed typo on some dark theme variables. All dark theme vars end with -dark

## 1.4.0 - 2019-08-30

Added to light and dark theme:

- ui-foreground
- ui-foreground-hover
- ui-foreground-pressed
- ui-text-1
- ui-text-2
- ui-text-3

For dark theme variables append -dark

## 1.3.1 - 2019-08-01

### Fixed

- Fixed undefined variable reference in yellow and red `-dark` ui colors

## 1.3.0 - 2019-08-01

### Added

- :sparkles: new `ui-` and `ui-XXX-dark` variables

## 1.2.1 - 2019-06-01

### Modified

- updated `.ase` file with new values from `v1.2.0`
- updated `.pdf` file with new values from `v1.2.0`

## 1.2.0 - 2019-05-09

### added

- `blk-005` (#f8f8f8) and `blk-235` (#060606)

### Modified

- `blk-010` to #f3f3f3 from #f3f3f4
- `blk-230` to #0b0b0b from #060606
- `rr` (red) color ramps in at every saturation level
- `h-yy-060` – `h-yy-100` Updates from Kyle H. to remove green add and more yellow/gold

## 1.0.0 - 2018-08-17

### Removed

- stylus/
- pattern_json/
  – scss/
  – css/

### Added

- Esri's new color palette. `colors.scss' in root directory.
- Added JSON format

## 0.1.2 - 2015-08-11

### Addedd

- Added 3 new vibrant colors Orange_100, Orange_150 and Orange_200
- Added a new Gray color Gray_050 with a hex value of #ffffff
- Updated all files with these changes

## 0.1.1 - 2015-05-21

### Modified

- Added a missing ":" to a guid in the JSON folder
- Updated a guid that was a duplicate of another guid in the system . . . what are the odds!

## 0.1.0 - 2015-05-04

### Modified

- Added Guid ID's to all of the Json colors scss files
- Added a name change in core colors that includes an "a" before some of the numbers to better group them
- Fixed some structure issues
- Cleaned up some bad formatting
- Moved colors to beta status (ready for use and testing)

## 0.0.4 - 2015-04-21

### Modified

- Renamed Brand_Red_100 to Brand_Orange_200
- Renamed Brand_Red_150 to Brand_Red_100
- Renamed Core colors 300-450 to be a100-a250

## 0.0.3 - 2015-04-08

### Modified

- Removed Esri\_ from all Brand Color names
- Updated Brown 200 with missing RGB
- Calcite Gray Colors (fixed missing colors)

## 0.0.2 - 2015-04-04

### Modified

- Calcite Gray's adjusted to neutral

## 0.0.1 - 2015-03-30

### Added

- Esri Brand Colors
- Calcite Core Colors
- Calcite Gray Colors
- Calcite Hightlight Color
- Calcite Vibrant Colors
