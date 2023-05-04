import { prismaClient } from "../../../infra/database/prismaClient";


type updateUserRequest = {
    first_name: string;
    last_name: string;
    email: string;
}

export class updateUserUsecase {
    constructor() {}

    async execute (data:updateUserRequest, id:string) {
        const updatedUser = await prismaClient.user.update({
            data: {
                first_name: data.first_name,
                email: data.email,
                last_name: data.last_name,
            },
            where: {
                id: id
            }
        })

        return updatedUser;
    }
}