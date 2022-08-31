import joi from "joi";
import axios from "axios";
import { Request, Response, NextFunction } from "express";
const battleValidation = joi.object({
  firstUser: joi.string().required(),
  secondUser: joi.string().required(),
});

export async function battleMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = battleValidation.validate(req.body);

  if (error) {
    console.log(error);
    return res.status(422).send("Corpo inválido");
  }

  next();
}
