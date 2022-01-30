import { Request, Response } from 'express';
import handleToken from '../utils/token';
import Validate from '../validates';

const UserController = {
    login: async (req: Request, res: Response) => {
        try {
            Validate.ValidateLogin(req.body);
            const refreshToken = handleToken.createRefreshToken(req.body);
            console.log('ok');
            return res.status(200).json({ message: refreshToken });
        } catch (error) {
            console.log(error);
            return res.status(404).json({ message: (error as Error).message });
        }
    },
};

export default UserController;
