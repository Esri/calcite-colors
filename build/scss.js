import { writeFile } from "fs";
import { colors } from "../dist/colors.modern.js";
function generateData() {
    let scss = "";
    for (const [colorVar, colorValue] of Object.entries(colors)) {
        scss += `$${colorVar}: #${colorValue};\n`;
    }
    return scss;
}
writeFile("dist/colors.scss", generateData(), () => { });
