import { Request, Response } from "express";
import { LoginAcountRequest, LoginAcountUsecase } from "./loginAcount.usecase";



export class LoginAcountController {
    constructor() {}

    async handle(req:Request, res: Response) {
        try{
            const useCase = new LoginAcountUsecase();
            const data:LoginAcountRequest = req.body;

            const acountData = await useCase.execute(data);

            return res.status(200).json(acountData);
        }catch(err) {
            res.status(500).json(err);
        }
    }
}