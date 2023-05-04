import { prismaClient } from "../../../infra/database/prismaClient";




export class GetUserUsecase {
    constructor() {}

    async execute (id:string) {
        const user = await prismaClient.user.findFirst({where: {id}});
        if(!user) {
            throw new Error('User does not exist')
        }
        return user
    }
}