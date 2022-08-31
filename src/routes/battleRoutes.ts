import { Router } from "express";
import postBattle from "../controllers/postBattle.js";
import { battleMiddleware } from "../middlewares/battleValidation.js";
const route = Router();

route.post("/battle", battleMiddleware, postBattle);

export default route;
