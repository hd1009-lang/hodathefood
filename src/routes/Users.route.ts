import express from 'express';
import UserController from '../controllers/Users.controller';

const router = express.Router();

router.post('/login', UserController.login);

export default router;
