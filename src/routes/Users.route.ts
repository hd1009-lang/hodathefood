import express from 'express';
import UserController from '../controllers/Users.controller';
import { AuthenticateToken } from '../middlewares/authAction';
import { asyncMiddle } from '../utils/HandleError';
const router = express.Router();

router.post('/login', asyncMiddle(UserController.login));
router.post('/refresh_token', asyncMiddle(UserController.getAccessToken));
router.post('/register', asyncMiddle(UserController.register));
router.post('/create-bmi', asyncMiddle(UserController.createBMI));
router.get('/bmi', AuthenticateToken, asyncMiddle(UserController.getBMI));
router.get('/info', AuthenticateToken, asyncMiddle(UserController.getInfoUser));
export default router;
