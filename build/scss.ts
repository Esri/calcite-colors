import { writeFile } from "fs";
import { colors } from "../dist/colors.modern.js";

function generateData(): string {
  let data: string = "";

  for (const [colorVar, colorValue] of Object.entries(colors)) {
    data += `$${colorVar}: ${colorValue};\n`;
  }

  return data;
}

writeFile("dist/colors.scss", generateData(), () => {});
