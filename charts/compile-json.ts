import * as fs from "fs";

import { ChartColors } from "./chart-colors.js";

const json = JSON.stringify(ChartColors);
fs.writeFileSync("chart-colors.json", json);
