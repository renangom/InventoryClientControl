import { Request, Response } from "express";
import { GetAcountUsecase } from "./getAcount.usecase";



export class GetAcountController {
    constructor() {}

    async handle(req:Request, res:Response) {
        try{
            const getAcount = new GetAcountUsecase();
            const id = req.params.id;

            const user = await getAcount.execute(id);

            return res.status(200).json(user);
        }catch(err){
            return res.status(500).json(err);
        }
    }
}