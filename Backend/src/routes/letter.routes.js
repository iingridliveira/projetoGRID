import {creatletter, getletter} from "../Controller/letter.controller.js";
import {Router} from "express";
const leterRouter = Router();
leterRouter.post("/creatletter", creatletter);
leterRouter.get("/showlettrs", getletter);
export {leterRouter};