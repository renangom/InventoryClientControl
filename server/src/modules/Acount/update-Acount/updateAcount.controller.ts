import { Request, Response } from "express";
import { UpdateAcountUsecase } from "./updateAcount.usecase";




export class UpdateAccountController {
    constructor() {}

    async handle(req:Request, res:Response) {
        try{
            const id = req.params.id;
            const data = req.body;
            const updateUsecase = new UpdateAcountUsecase();

            const updatedUser = await updateUsecase.execute(data, id);

            return res.status(200).json(updatedUser);
        }catch(err) {
            return res.status(500).json(err);
        }
    }
}