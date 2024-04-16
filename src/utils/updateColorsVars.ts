import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

import { getAppRoot, getWebBaseUrl } from "./getWebBaseUrl";

export const updateColorsVars = () => {
  const pathColorsCssTmpFile = join(
    getAppRoot(),
    "public",
    "css",
    "colors.css.tmp"
  );
  const pathColorsCssFile = join(getAppRoot(), "public", "css", "colors.css");
  const colorCssTmp = readFileSync(pathColorsCssTmpFile);
  const newColorsCss = colorCssTmp
    .toString()
    .replace("--main-url-value", getWebBaseUrl());
  writeFileSync(pathColorsCssFile, newColorsCss);
};

export const updateUrlVars = () => {
  const pathStylesCssTmpFile = join(
    getAppRoot(),
    "public",
    "css",
    "styles.css.tmp"
  );
  const pathStylesCssFile = join(getAppRoot(), "public", "css", "styles.css");

  const styleCssTmp = readFileSync(pathStylesCssTmpFile);
  console.log(styleCssTmp.toString());

  const styleCss = readFileSync(pathStylesCssFile);
  console.log(styleCss.toString());

  console.log(styleCssTmp.toString());
  const newStylesCss = styleCssTmp
    .toString()
    .replace("--main-url-value", getWebBaseUrl());
  console.log(newStylesCss);
  // console.log(newStylesCss)
  // writeFileSync(pathStylesCssFile, newStylesCss);
};
