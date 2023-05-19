import { Router } from "express";
import multer from "multer";
import multerConfig from '../../configs/configMulter'
import { UploadImageController } from "../../modules/Acount/uploadImage/uploadImageController";

export const uploadRoutes = Router();
const upload = multer(multerConfig);

uploadRoutes.post('/upload/:id', upload.single('image') ,(req,res) => {
    const uploadImageController = new UploadImageController();
    uploadImageController.handle(req,res);
})