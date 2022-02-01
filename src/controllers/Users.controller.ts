import { Request, Response, NextFunction } from 'express';
import handleToken from '../utils/token';
import Validate from '../validates';
import { HttpStatusCode, ErrorApi } from '../utils/HandleError';
import UserServices from '../services/User.services';

const UserController = {
    register: async (req: Request, res: Response, next: NextFunction) => {
        Validate.UserValidation.ValidateRegister(req.body);
        const data = await UserServices.RegisterUser(req.body);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Ok', data });
    },
    login: async (req: Request, res: Response, next: NextFunction) => {
        Validate.UserValidation.ValidateLogin(req.body);
        const refreshToken = handleToken.createRefreshToken(req.body);
        return res.status(HttpStatusCode.OK).json({ message: refreshToken });
    },
    updateBMI: async (req: Request, res: Response, next: NextFunction) => {
        Validate.UserValidation.ValidateBMI(req.body);
        const data = await UserServices.UpdateBMIs(req.body);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Cập nhật BMI thành công', data });
    },
};

export default UserController;
