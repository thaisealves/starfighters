import { Request, Response } from "express";
import { battleService } from "../service/battleService.js";
export default function postBattle(req: Request, res: Response) {
  const body: object = req.body;
  const resultado = battleService(body);
}
