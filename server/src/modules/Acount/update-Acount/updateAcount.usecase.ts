import { prismaClient } from "../../../infra/database/prismaClient";


export interface UpdateAcountRequest {
    email: string;
    login: string;
    password: string;
    imageUrl: string;
}


export class UpdateAcountUsecase {
    constructor() {}

    async execute(data: UpdateAcountRequest, id:string) {
        const acount = await prismaClient.acount.findFirst({where: {id}});

        if(!acount) {
            throw new Error('This account does not exist');
        }

        const updatedAccount = await prismaClient.acount.update({
            where: { id },
            data: {
                email:data?.email,
                imageUrl: data.imageUrl,
                login: data.login,
                password: data.password
            }
        })

        return updatedAccount;
    }
}