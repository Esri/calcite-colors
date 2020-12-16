import { writeFile } from "fs";
import { colors, themes, CalciteTheme } from "../dist/colors.modern.js";

function generateThemeVars(theme: CalciteTheme): string {
  let data: string = "";

  for (const [key] of Object.entries(theme.variables)) {
    data += `  --calcite-ui-${key}: #{$ui-${key}-${theme.name}};\n`;
  }

  return data;
}

function generateData(): string {
  let data: string = "";

  for (const [key, value] of Object.entries(colors)) {
    data += `$${key}: ${value};\n`;
  }

  themes.forEach((theme) => {

    for (const [key, value] of Object.entries(theme.variables)) {
      data += `$ui-${key}-${theme.name}: ${value};\n`;
    }

    data += `\n@mixin calcite-theme-${theme.name}() {\n${generateThemeVars(theme)}}\n`;
  });

  return data;
}

writeFile("dist/colors.scss", generateData(), () => {});
