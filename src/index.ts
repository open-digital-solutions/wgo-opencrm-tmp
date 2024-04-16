import express, { Application } from "express";
import { join } from "path";
import { StartUp } from "wgo-opencrm";

StartUp([], (app) => {
  app.use("/", express.static(join(__dirname, "public")));
  console.log("Add stack middlewares here");
});
