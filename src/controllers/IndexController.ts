import { Request, Response } from "express";
import { Controller, Get } from "wgo-opencrm";
import { IsDevelopmentEnv, getWebBaseUrl } from "../utils/getWebBaseUrl";

@Controller("/")
export class IndexController {
  @Get("/")
  public async loginGet(req: Request, res: Response) {
    const baseUrl = getWebBaseUrl();
    const isDevelopmentEnv = IsDevelopmentEnv();
    res.render("pages/index", { baseUrl, isDevelopmentEnv });
  }
}
