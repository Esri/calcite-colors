import * as fs from "fs";

import * as Colors from "./colors.js";
import { ChartColors } from "./charts/chart-colors.js";

const colorsJSON = JSON.stringify(Colors.default);
fs.writeFileSync("dist/colors.json", colorsJSON);

const json = JSON.stringify(ChartColors);
fs.writeFileSync("dist/charts/chart-colors.json", json);
