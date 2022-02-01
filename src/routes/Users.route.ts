import express from 'express';
import UserController from '../controllers/Users.controller';
import { asyncMiddle } from '../utils/HandleError';
const router = express.Router();

router.post('/login', asyncMiddle(UserController.login));
router.post('/register', asyncMiddle(UserController.register));
router.post('/update-bmi', asyncMiddle(UserController.updateBMI));

export default router;
