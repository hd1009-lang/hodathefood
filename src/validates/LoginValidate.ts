import { NextFunction } from 'express';
import { ErrorApi } from './../utils/HandleError';
interface BodyRequest {
    username: string;
    password: string;
}
// interface RegisterRequest extends BodyRequest{

// }
const ValidateLogin: Function = (body: BodyRequest) => {
    const { username, password } = body;
    if (username.length < 5 || password.length < 6) {
        return false;
    }
    return true;
};
export default ValidateLogin;
