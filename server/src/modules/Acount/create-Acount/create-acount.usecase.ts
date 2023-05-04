import { prismaClient } from "../../../infra/database/prismaClient"


export interface CreateAcountRequest {
    email: string,
    login: string,
    password: string
}

export class CreateAcountUsecase {
    constructor() {}

    async execute (data: CreateAcountRequest) {
        const acount = await prismaClient.acount.findFirst({ where: {email: data.email}})
        if(acount) {
            throw new Error('This acount already exists!!');
        }

        const newAcount = await prismaClient.acount.create({data: {
            email: data.email,
            login: data.login,
            password: data.password
        }});

        return newAcount;
    }
}