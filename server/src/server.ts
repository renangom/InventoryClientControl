import express from 'express';
import cors from 'cors';
import { clientRouter } from './infra/routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(clientRouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})