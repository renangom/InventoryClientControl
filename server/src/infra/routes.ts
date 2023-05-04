import { Router } from "express";
import { prismaClient } from "./database/prismaClient";
import { UpdateUserController } from "../modules/User/update-user/update-user.controller";
import { GetUserController } from "../modules/User/get-user/get-user.controller";
import { LoginAcountController } from "../modules/Acount/login-Acount/loginAcount.controller";
import { CreateAcountController } from "../modules/Acount/create-Acount/create-acount.controller";
import { GetAcountController } from "../modules/Acount/get-Acount/getAcount.controller";
import { UpdateAccountController } from "../modules/Acount/update-Acount/updateAcount.controller";

export const clientRouter = Router();

type dataType = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
}[]

clientRouter.get('/', async (req,res) => {
    const query = req.query.q?.toString();

    if(query){
        const users = await prismaClient.user.findMany({
            where: {
                first_name: {
                    contains: query
                }
            }
        })
        res.status(200).json(users.splice(0,15));
    }else {
        const users = (await prismaClient.user.findMany());
        res.status(200).json(users.splice(0,15))
    }
    
})

clientRouter.delete('/:id', async (req,res) => {
    const {id} = req.params;

    const user = await prismaClient.user.findFirst({where: {id}})

    if(!user) {
        res.status(404).json('User not found');
    }

    await prismaClient.user.delete({where:{id}});
    res.status(203)
})

clientRouter.put('/client/:id', async (req,res) => {
    const updateController = new UpdateUserController();
    updateController.handle(req,res);
})

clientRouter.get('/client/:id', async (req,res) => {
    const getController = new GetUserController();

    getController.handle(req,res);
})

// ============================= ACOUNT ===========================

clientRouter.post('/login', async (req,res) => {
    const loginController = new LoginAcountController();
    loginController.handle(req,res);
})

clientRouter.post('/create/acount', async (req,res) => {
    const createAcountController = new CreateAcountController();
    createAcountController.handle(req,res);
})

clientRouter.get('/acount/:id', (req, res) => {
    const getAcountController = new GetAcountController();
    getAcountController.handle(req,res);
})

clientRouter.put('/acount/:id', (req,res) => {
    const updateAcountController = new UpdateAccountController();
    updateAcountController.handle(req,res);
})