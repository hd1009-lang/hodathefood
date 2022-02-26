import { AuthenticateToken } from './../middlewares/authAction';
import { asyncMiddle } from './../utils/HandleError';
import express from 'express';
import FileController from '../controllers/File.controller';

const router = express.Router();

router.post('/upload-img', AuthenticateToken, asyncMiddle(FileController.upload));

export default router;
