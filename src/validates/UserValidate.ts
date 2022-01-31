import { User, UserRegister, BMIModel } from '../Types/User';

// interface RegisterRequest extends BodyRequest{

// }
export const ValidateLogin: Function = (body: User) => {
    const { username, password } = body;
    if (username.length < 5 || password.length < 6) {
        return false;
    }
    return true;
};

export const ValidateRegister: Function = (body: UserRegister) => {
    const { username, password, name } = body;
    if (username.length < 5 || password.length < 6 || name.length < 2) {
        return false;
    }
    return true;
};

export const ValidateBMI: Function = (body: BMIModel) => {
    const { gender, height, weight, activity, yearOfBirth } = body;
    if (gender !== 0 && gender !== 1) throw new Error('Giới tính Nam | Nữ');
    if (height! <= 0 && weight! <= 0) throw new Error('Chỉ số không thích hợp');
    if (activity! <= 0) throw new Error('Chỉ số không thích hợp');
    const date = new Date();
    if (yearOfBirth! > date.getFullYear()) throw new Error('Năm sinh không phù hợp');
    return true;
};

const UserValidation = {
    ValidateLogin,
    ValidateRegister,
    ValidateBMI,
};
export default UserValidation;
