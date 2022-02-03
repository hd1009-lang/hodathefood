import { Request, Response, NextFunction } from 'express';
import handleToken from '../utils/token';
import Validate from '../validates';
import { HttpStatusCode, ErrorApi } from '../utils/HandleError';
import UserServices from '../services/User.services';

const UserController = {
    register: async (req: Request, res: Response) => {
        Validate.UserValidation.ValidateRegister(req.body);
        const data = await UserServices.RegisterUser(req.body);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Ok', data });
    },
    login: async (req: Request, res: Response) => {
        Validate.UserValidation.ValidateLogin(req.body);
        const refreshToken = handleToken.createRefreshToken(req.body);
        return res.status(HttpStatusCode.OK).json({ message: refreshToken });
    },
    createBMI: async (req: Request, res: Response) => {
        Validate.UserValidation.ValidateBMI(req.body);
        const data = await UserServices.createBMIs(req.body);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Cập nhật BMI thành công', data });
    },
    updateUser: async (req: Request, res: Response) => {},
};

export default UserController;
