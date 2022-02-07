import { Request, Response, NextFunction } from 'express';
import Validate from '../validates';
import { HttpStatusCode, ErrorApi } from '../utils/HandleError';
import UserServices from '../services/User.services';
import Helper from '../utils/Regex';

const UserController = {
    register: async (req: Request, res: Response) => {
        const { username, password } = req.body;
        const content = {
            ...req.body,
            username: Helper.removeVietnameseTones(username).split(' ').join(''),
        };
        Validate.UserValidation.ValidateRegister(content);
        const data = await UserServices.RegisterUser(content);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Ok', data });
    },
    login: async (req: Request, res: Response) => {
        const { username, password, ...another } = req.body;
        const content = {
            username,
            password,
        };
        Validate.UserValidation.ValidateLogin(content);
        const result = await UserServices.LoginUser(content);
        res.cookie('refresh_token', result.refreshToken, {
            httpOnly: true,
            path: '/api/users/refresh_token',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
        });
        return res.status(HttpStatusCode.OK).json({ message: 'Thành công', data: result.user, token: result.refreshToken });
    },
    getAccessToken: async (req: Request, res: Response) => {
        const rf_token = await req.cookies.refresh_token;
        if (!rf_token) throw ErrorApi.UnAuthenticate('Vui lòng đăng nhập');
        const accessToken = UserServices.getAccessToken(rf_token);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', token: accessToken });
    },
    createBMI: async (req: Request, res: Response) => {
        Validate.UserValidation.ValidateBMI(req.body);
        const data = await UserServices.createBMIs(req.body);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Cập nhật BMI thành công', data });
    },
    updateUser: async (req: Request, res: Response) => {},
    getBMI: async (req: Request, res: Response) => {
        const result = await UserServices.getBMI(req.user as string);
        return res.status(HttpStatusCode.OK).json({ message: 'Thành công', data: result });
    },
    getInfoUser: async (req: Request, res: Response) => {
        const result = await UserServices.getInfoUser(req.user as string);
        return res.status(HttpStatusCode.OK).json({ message: 'Thành công', data: result });
    },
};

export default UserController;
