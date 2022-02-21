import { asyncMiddle } from './../utils/HandleError';
import express from 'express';
import FileController from '../controllers/File.controller';

const router = express.Router();

router.post('/upload-img', asyncMiddle(FileController.upload));

export default router;
