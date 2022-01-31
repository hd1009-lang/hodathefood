import { Request, Response, NextFunction } from 'express';
import handleToken from '../utils/token';
import Validate from '../validates';
import { HttpStatusCode, ErrorApi } from '../utils/HandleError';
import UserServices from '../services/User.services';

const UserController = {
    register: async (req: Request, res: Response, next: NextFunction) => {
        if (!Validate.UserValidation.ValidateRegister(req.body)) {
            return next(ErrorApi.BadRequest('Tên đăng nhập hoặc mật khẩu sai'));
        }
        try {
            const data = await UserServices.RegisterUser(req.body);
            return res.status(HttpStatusCode.CREATED).json({ message: 'Ok', data });
        } catch (error) {
            return next(ErrorApi.BadRequest((error as Error).message));
        }
    },
    login: async (req: Request, res: Response, next: NextFunction) => {
        if (!Validate.UserValidation.ValidateLogin(req.body)) {
            return next(ErrorApi.BadRequest('Tên đăng nhập hoặc mật khẩu sai'));
        }
        const refreshToken = handleToken.createRefreshToken(req.body);
        return res.status(HttpStatusCode.OK).json({ message: refreshToken });
    },
    updateBMI: async (req: Request, res: Response, next: NextFunction) => {
        try {
            Validate.UserValidation.ValidateBMI(req.body);
            const data = await UserServices.UpdateBMIs(req.body);
            return res.status(HttpStatusCode.CREATED).json({ message: 'Ok', data });
        } catch (error) {
            return next(ErrorApi.BadRequest((error as Error).message));
        }
    },
};

export default UserController;
