import { S3Client } from "@aws-sdk/client-s3";
import { fromIni } from "@aws-sdk/credential-providers";


export const s3 = new S3Client({
    region:"us-east-1",
    credentials: fromIni({
        profile: 
    })
})