import { writeFile } from "fs";
import { colors, themes, CalciteTheme } from "../dist/colors.modern.js";

function generateThemeVars(theme: CalciteTheme): string {
  return Object.entries(theme.variables)
    .map(([key, value]) => `$ui-${key}-${theme.name}: ${value};\n`)
    .join("");
}

function generateTheme(theme: CalciteTheme): string {
  return `${generateThemeVars(theme)}\n@mixin calcite-theme-${
    theme.name
  }() {\n${generateCSSThemeVars(theme)}}\n`;
}

function generateCSSThemeVars(theme: CalciteTheme): string {
  return Object.entries(theme.variables)
    .map(([key]) => `  --calcite-ui-${key}: #{$ui-${key}-${theme.name}};\n`)
    .join("");
}

function generateColors(): string {
  return Object.entries(colors)
    .map(([key, value]) => `$${key}: ${value};\n`)
    .join("");
}

function generateThemes(): string {
  return themes.map((theme: CalciteTheme) => generateTheme(theme)).join("");
}

function generateData(): string {
  return `${generateColors()}${generateThemes()}`;
}

writeFile("dist/colors.scss", generateData(), () => {});
