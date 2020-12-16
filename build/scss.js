import { writeFile } from "fs";
import { colors, themes } from "../dist/colors.modern.js";
function generateThemeVars(variables) {
    let data = "";
    for (const [key, value] of Object.entries(variables)) {
        data += `  --calcite-ui-${key}: #{${value}};\n`;
    }
    return data;
}
function generateData() {
    let data = "";
    for (const [colorVar, colorValue] of Object.entries(colors)) {
        data += `$${colorVar}: ${colorValue};\n`;
    }
    themes.forEach((theme) => {
        data += `\n@mixin calcite-theme-${theme.name}() {\n${generateThemeVars(theme.variables)}}\n`;
    });
    return data;
}
writeFile("dist/colors.scss", generateData(), () => { });
