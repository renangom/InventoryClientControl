import { prismaClient } from "../../../infra/database/prismaClient"

export interface LoginAcountRequest {
    email: string,
    password: string
}


export class LoginAcountUsecase {
    constructor() {}

    async execute(data:LoginAcountRequest) {
        const acount = await prismaClient.acount.findFirst({
            where: {
                email: data.email,
                password: data.password
            }
        });
        
        if(!acount) {
            throw new Error('This acount does not exist');
        }

        return acount;
    }
}