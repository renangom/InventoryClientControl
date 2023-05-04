import { Request, Response } from "express";
import { CreateAcountRequest, CreateAcountUsecase } from "./create-acount.usecase";




export class CreateAcountController {
    constructor() {}

    async handle(req:Request, res:Response) {
        const useCase = new CreateAcountUsecase();
        const data: CreateAcountRequest = req.body;

        try{
            const acount = await useCase.execute(data);
            res.status(201).json(acount);
        }catch(err) {
            return res.status(400).json(err);
        }
    }
}