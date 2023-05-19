import aws , { S3 } from "aws-sdk";
import path from "path";
import multerConfig from '../configs/configMulter'
import mime from 'mime'
import { promises } from "fs";

export class S3Storage {
    private client: S3

    constructor() {
        this.client = new aws.S3({
            region: 'us-east-1',

        })
    }

    async saveFile(filename: string): Promise<string> {
        const originalPath = path.resolve(multerConfig.directory, filename)
        const contentType = mime.getType(originalPath)

        if(!contentType){
            throw new Error('File not found')
        }

        const fileContent = await promises.readFile(originalPath);
        this.client.putObject({
            Bucket: 'rlopeslab-dev4',
            Key: filename,
            ACL: 'public-read',
            Body: fileContent,
            ContentType: contentType
        })
        .promise();

        await promises.unlink(originalPath);

        const imageLink = this.client.getSignedUrl('getObject', {
            Bucket: 'rlopeslab-dev4',
            Key: filename,
        })

        return imageLink;
    }

    async deleteFile(filename: string) : Promise<void> {
        this.client.deleteObject({
            Bucket: 'rlopeslab-dev4',
            Key: filename,
        })
    
    }

    async editFile(filename: string): Promise<void> {
        
    }
}