import { Request, Response } from "express";
import { UploadImageUseCase } from "./uploadImageUseCase";



export class UploadImageController {
    async handle(req:Request, res:Response) {
        const file = req.file!;
        const id = req.params.id;
        const uploadImageUseCase = new UploadImageUseCase();
        const userUpdated = await uploadImageUseCase.execute(file, id);

        return res.status(200).json(userUpdated);
    }
}