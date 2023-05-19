import { S3Storage } from "../../../helpFunctions/S3Storage";
import { prismaClient } from "../../../infra/database/prismaClient";


export class UploadImageUseCase { 
    async execute(file: Express.Multer.File, id:string) {
        const s3storage = new S3Storage();
        const user = await prismaClient.acount.findFirst({where: {id}});
        //tratando erro
        if(!user) {
            throw new Error('User not found');
        }

        const imagemLink  = await s3storage.saveFile(file.filename);

        const newUser = await prismaClient.acount.update({
            where: {
                id
            },
            data: {
                imageUrl: imagemLink
            }
        });

        return newUser
        
    }
}