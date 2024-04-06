import express, { Application } from "express";
import { join } from "path";
import { GetNodeEnvKey, GetPortKey } from "wgo-settings";
import { BootOptions, boot } from "wgo-opencrm";
import omniumRouter from "./router/appRouter";

export type BootFunc = (app: Application) => void;

if (!process.env.APP_WEB_ROOT)
  throw "Impossible to get value from PORT environment key";

const options: BootOptions = {
  port: parseInt(GetPortKey()),
  appWebRoot: process.env.APP_WEB_ROOT,
  app: express(),
};

boot(options, (optionsUpdated: any): any => {
  optionsUpdated.app.locals.getWebBaseUrl = () => {
    const getNodeEnv = GetNodeEnvKey();
    if (getNodeEnv === "development") {
      return process.env.APP_WEB_HOST_DEV
        ? process.env.APP_WEB_HOST_DEV
        : "APP_WEB_HOST_DEV not found";
    }
    return process.env.APP_WEB_HOST
      ? process.env.APP_WEB_HOST
      : "APP_WEB_HOST not found";
  };
  optionsUpdated.app.use(
    "/static",
    express.static(join(options.appWebRoot, "public"))
  );
  optionsUpdated.app.use("/", omniumRouter);
});
