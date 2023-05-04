import { Request, Response } from "express";
import { updateUserUsecase } from "./update-user.usecase";


export class UpdateUserController {
    constructor() {}

    async handle(req: Request, res: Response) {
        const useCase = new updateUserUsecase();
        const id = req.params.id;

        const updatedUser = await useCase.execute(req.body, id);

        return res.status(200).json(updatedUser);
    }
}