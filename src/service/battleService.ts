import axios from "axios";
import { Request, Response, NextFunction } from "express";
export async function battleService(body) {
  const validateFirst: { message: string; } = await axios.get(
    `https://api.github.com/users/${body.firstUser}/repos`
  );
  const validateSecond: { message: string; stargazers_count: number } =
    await axios.get(`https://api.github.com/users/${body.secondUser}/repos`);

  if (validateFirst.message || validateSecond.message) {
    console.log(validateFirst.message, validateSecond.message);
    throw { code: "NotFound", message: "Usuário não existe" };
  }
 
}
