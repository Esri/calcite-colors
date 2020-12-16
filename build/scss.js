import { writeFile } from "fs";
import { colors, themes } from "../dist/colors.modern.js";
function generateThemeVars(theme) {
    return Object.entries(theme.variables)
        .map(([key, value]) => `$ui-${key}-${theme.name}: ${value};\n`)
        .join("");
}
function generateTheme(theme) {
    return `${generateThemeVars(theme)}\n@mixin calcite-theme-${theme.name}() {\n${generateCSSThemeVars(theme)}}\n`;
}
function generateCSSThemeVars(theme) {
    return Object.entries(theme.variables)
        .map(([key]) => `  --calcite-ui-${key}: #{$ui-${key}-${theme.name}};\n`)
        .join("");
}
function generateColors() {
    return Object.entries(colors)
        .map(([key, value]) => `$${key}: ${value};\n`)
        .join("");
}
function generateThemes() {
    return themes.map((theme) => generateTheme(theme)).join("");
}
function generateData() {
    return `${generateColors()}${generateThemes()}`;
}
writeFile("dist/colors.scss", generateData(), () => { });
