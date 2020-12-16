import { writeFile } from "fs";
import { Theme } from "../src/colors";
import { colors, themes } from "../dist/colors.modern.js";

const PROJECT_NAME = "calcite";
const VARIABLE_PREFIX = "ui";
const CSS_PREFIX = `${PROJECT_NAME}-${VARIABLE_PREFIX}`;
const THEME_MIXIN_PREFIX = `${PROJECT_NAME}-theme`;

function generateThemeVars(theme: Theme): string {
  const { name, variables } = theme;

  return Object.entries(variables)
    .map(([key, value]) => `$${VARIABLE_PREFIX}-${key}-${name}: ${value};\n`)
    .join("");
}

function generateTheme(theme: Theme): string {
  const { name } = theme;

  return `${generateThemeVars(
    theme
  )}\n@mixin ${THEME_MIXIN_PREFIX}-${name}() {\n${generateCSSThemeVars(
    theme
  )}}\n`;
}

function generateCSSThemeVars(theme: Theme): string {
  const { name, variables } = theme;

  return Object.entries(variables)
    .map(
      ([key]) =>
        `  --${CSS_PREFIX}-${key}: #{$${VARIABLE_PREFIX}-${key}-${name}};\n`
    )
    .join("");
}

function generateColors(): string {
  return Object.entries(colors)
    .map(([key, value]) => `$${key}: ${value};\n`)
    .join("");
}

function generateThemes(): string {
  return themes.map((theme: Theme) => generateTheme(theme)).join("");
}

function generateData(): string {
  return `${generateColors()}${generateThemes()}`;
}

writeFile("dist/colors.scss", generateData(), () => {});
