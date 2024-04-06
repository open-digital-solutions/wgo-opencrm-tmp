import { Router } from "express"
import { ITALIAN_TRANSLATIONS } from "../translations/italianTranslations";
import { IsDevelopmentEnv, getWebBaseUrl } from "../utils/getWebBaseUrl";

const omniumRouter = Router()
const baseUrl = getWebBaseUrl()
const isDevelopmentEnv = IsDevelopmentEnv()

omniumRouter.get("/", function (req: any, res: any) {
  res.render("pages/index", { baseUrl, isDevelopmentEnv });
});

omniumRouter.get("/home", function (req: any, res: { render: (arg0: string, arg1: Object) => void }) {
  res.render("pages/home", { baseUrl, isDevelopmentEnv, italianTranslations: ITALIAN_TRANSLATIONS });
});

export default omniumRouter
