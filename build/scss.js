import { writeFile } from "fs";
import { colors } from "../dist/colors.modern.js";
function generateData() {
    let data = "";
    for (const [colorVar, colorValue] of Object.entries(colors)) {
        data += `$${colorVar}: ${colorValue};\n`;
    }
    return data;
}
writeFile("dist/colors.scss", generateData(), () => { });
