import { Router } from "express";
import { UpdateUserController } from "../../modules/User/update-user/update-user.controller";
import { GetUserController } from "../../modules/User/get-user/get-user.controller";
import { prismaClient } from "../database/prismaClient";


export const userRouter = Router();


userRouter.put('/client/:id', async (req,res) => {
    const updateController = new UpdateUserController();
    updateController.handle(req,res);
})

userRouter.get('/client/:id', async (req,res) => {
    const getController = new GetUserController();

    getController.handle(req,res);
})

userRouter.get('/', async (req,res) => {
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

userRouter.delete('/:id', async (req,res) => {
    const {id} = req.params;

    const user = await prismaClient.user.findFirst({where: {id}})

    if(!user) {
        res.status(404).json('User not found');
    }

    await prismaClient.user.delete({where:{id}});
    res.status(203)
})