import { Request, Response, NextFunction } from 'express';
import handleToken from '../utils/token';
import Validate from '../validates';
import { HttpStatusCode, ErrorApi } from '../utils/HandleError';
const UserController = {
    register: async (req: Request, res: Response) => {
        try {
            Validate.ValidateLogin(req.body);
        } catch (error) {
            return res.status(HttpStatusCode.BAD_REQUEST).json({ message: (error as Error).message });
        }
    },
    login: async (req: Request, res: Response, next: NextFunction) => {
        if (!Validate.ValidateLogin(req.body)) {
            return next(ErrorApi.BadRequest('Tên đăng nhập hoặc mật khẩu sai'));
        }
        const refreshToken = handleToken.createRefreshToken(req.body);
        return res.status(HttpStatusCode.OK).json({ message: refreshToken });
    },
};

export default UserController;
