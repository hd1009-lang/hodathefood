import express from 'express';
import UserController from '../controllers/Users.controller';

const router = express.Router();

router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.post('/update-bmi', UserController.updateBMI);

export default router;
