import { handleErrorMessage } from './utils/HandleError';
import express from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import path from 'path';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../docs/Swagger';

dotenv.config();

connectDB();

const app = express();
const PORT = 8000;
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.static(path.basename(path.join(__dirname, 'public'))));
app.get('/', (req, res) => {
    return res.redirect('/docs');
});
var cssOptions = {
    customCssUrl: '/custom.css',
    customSiteTitle: 'Poopcode APIs',
    customfavIcon: '/clipboard.ico',
};
app.use('/api', routes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, cssOptions));
app.use(handleErrorMessage);
app.listen(PORT, () => {
    console.log(`Let's the game begin 🚀`);
});
