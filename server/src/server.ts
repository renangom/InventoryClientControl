import express from 'express';
import cors from 'cors';
import { routes } from './infra/routes';

export const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})