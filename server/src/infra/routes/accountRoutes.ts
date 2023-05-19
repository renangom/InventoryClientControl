import { Router } from "express";
import { LoginAcountController } from "../../modules/Acount/login-Acount/loginAcount.controller";
import { CreateAcountController } from "../../modules/Acount/create-Acount/create-acount.controller";
import { GetAcountController } from "../../modules/Acount/get-Acount/getAcount.controller";
import { UpdateAccountController } from "../../modules/Acount/update-Acount/updateAcount.controller";


export const accountRouter = Router();

// ============================= ACOUNT ===========================

accountRouter.post('/login', async (req,res) => {
    const loginController = new LoginAcountController();
    loginController.handle(req,res);
})

accountRouter.post('/create/acount', async (req,res) => {
    const createAcountController = new CreateAcountController();
    createAcountController.handle(req,res);
})

accountRouter.get('/acount/:id', (req, res) => {
    const getAcountController = new GetAcountController();
    getAcountController.handle(req,res);
})

accountRouter.put('/acount/:id', (req,res) => {
    const updateAcountController = new UpdateAccountController();
    updateAcountController.handle(req,res);
})