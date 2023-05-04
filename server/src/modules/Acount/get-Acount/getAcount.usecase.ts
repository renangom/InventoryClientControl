import { prismaClient } from "../../../infra/database/prismaClient";



export class GetAcountUsecase {
    constructor () {}

    async execute(id:string) {
        const user = await prismaClient.acount.findFirst({where: {id}})

        if(!user) {
            throw new Error('This account does not exist')
        }

        return user;
    }
}