import {Users} from '../../users'
import { prismaClient } from '../infra/database/prismaClient'


Users.forEach(async (user) => {
   await prismaClient.user.create({
    data: {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        gender: user.gender
    }
   })
});
