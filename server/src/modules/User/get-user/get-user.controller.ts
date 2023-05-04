import { Request, Response } from "express";
import { GetUserUsecase } from "./get-user.usecase";


export class GetUserController {
    constructor() {}

    async handle(req:Request, res:Response) {
        const useCase = new GetUserUsecase();

        try{
            const user = await useCase.execute(req.params.id);

            return res.status(200).json(user);
        }catch(err) {
            return res.status(400).json(err);
        }
    }
}