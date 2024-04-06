import { GetNodeEnvKey } from "wgo-settings";

export const getWebBaseUrl = () => {
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


export const IsDevelopmentEnv = () => {
  const getNodeEnv = GetNodeEnvKey();
  return (getNodeEnv === "development")
}