import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload{
  sub:string;
}

export async function ensureAuthenticated(
  request: Request,
  Response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const {sub:user_id} = verify(token, "60cd6bbd7974a01ea7184d2e77bdba3d") as IPayload;
    const userRepository = new UsersRepository();
    const user = userRepository.findById(user_id);

    if(!user){
      throw new Error("User does not exists!");
    }
    
    next();
  } catch (error) {
    throw new Error("Invalid Token!");
  }
}
