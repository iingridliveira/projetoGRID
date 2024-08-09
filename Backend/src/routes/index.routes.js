import {Router} from "express";
import {leterRouter} from "./letter.routes.js";

const Routes = Router();
Routes.use("/letter", leterRouter)

export {Routes};
