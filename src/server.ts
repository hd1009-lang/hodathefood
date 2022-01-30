import { handleErrorMessage } from './utils/HandleError';
import express from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes';

import swaggerUI from 'swagger-ui-express';
import swaggerDocument from './docs/Swagger';

dotenv.config();

// connectDB();

const app = express();
const PORT = 8000;
app.use(cors());
app.use(helmet());
app.use(express.json());
app.get('/', (req, res) => {
    return res.redirect('/docs');
});

app.use('/api', routes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, { explorer: true }));
app.use(handleErrorMessage);
app.listen(PORT, () => {
    console.log(`Let's the game begin 🚀`);
});
