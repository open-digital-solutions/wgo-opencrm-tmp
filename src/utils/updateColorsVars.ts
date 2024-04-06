import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { BootOptions } from "wgo-opencrm";
import { getWebBaseUrl } from "./getWebBaseUrl";

export const updateColorsVars = (options: BootOptions) => {
  const pathColorsCssTmpFile = join(
    options.appWebRoot,
    "public",
    "css",
    "colors.css.tmp"
  );
  const pathColorsCssFile = join(
    options.appWebRoot,
    "public",
    "css",
    "colors.css"
  );
  const colorCssTmp = readFileSync(pathColorsCssTmpFile);
  const newColorsCss = colorCssTmp
    .toString()
    .replace("--main-url-value", getWebBaseUrl());
  writeFileSync(pathColorsCssFile, newColorsCss);
};

export const updateUrlVars = (options: BootOptions) => {
  const pathStylesCssTmpFile = join(
    options.appWebRoot,
    "public",
    "css",
    "styles.css.tmp"
  );
  const pathStylesCssFile = join(
    options.appWebRoot,
    "public",
    "css",
    "styles.css"
  );

  
  const styleCssTmp = readFileSync(pathStylesCssTmpFile);
  console.log(styleCssTmp.toString())

  const styleCss = readFileSync(pathStylesCssFile);
  console.log(styleCss.toString())

  console.log(styleCssTmp.toString())
  const newStylesCss = styleCssTmp
    .toString()
    .replace("--main-url-value", getWebBaseUrl());
  console.log(newStylesCss)
  // console.log(newStylesCss)
  // writeFileSync(pathStylesCssFile, newStylesCss);
};
