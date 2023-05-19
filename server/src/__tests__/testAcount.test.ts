import request from 'supertest';
import { app } from '../server';

const baseUrl = 'http://localhost:5000'

describe('Testando Account', () => {
    test('POST /create/acount deve criar um usuário e retorná-lo', async () => {
        const newUser = {
            email: 'renan23eduardoo@gmail.com',
            login: 'renanmanto',
            password: '123456'
        }

        const response = await request(app).post(`/create/acount`).send(newUser).set('Host', 'localhost:5000');

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            id: '',
            email: 'renan23eduardoo@gmail.com',
            login: 'renanmanto',
            password: '123456',
            isAdmin: false,
            imageUrl: ''
        })
        
    })
})