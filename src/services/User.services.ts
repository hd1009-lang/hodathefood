import { ErrorApi } from './../utils/HandleError';
import { BMIModel, User } from './../Types/User';
import { UserRegister } from '../Types/User';
import BMIs from '../models/BMI.model';
import Users from '../models/User.model';
import Token from '../utils/token';
import jwt from 'jsonwebtoken';
const UserServices = {
    RegisterUser: async (body: UserRegister) => {
        try {
            const user = await Users.findOne({ username: body.username });
            if (user) {
                throw new Error('Tồn tại user');
            }
            const newUser = new Users({
                ...body,
            });
            const data = await newUser.save();
            return data;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    LoginUser: async (content: User) => {
        try {
            const user = await Users.findOne({ username: content.username }).populate('bmiId', '');
            if (!user || user.password !== content.password) {
                throw new Error('Vui lòng kiểm tra tài khoản hoặc mật khẩu');
            }
            const payload = {
                id: user!._id,
                name: user!.username,
            };
            const refreshToken = Token.createRefreshToken(payload);

            const userResult = {
                username: user.username,
                name: user.name,
                post: user.post,
                bmiId: user.bmiId,
            };
            return { user: userResult, refreshToken };
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    getAccessToken: (rf_token: string) => {
        try {
            const token = jwt.verify(rf_token, process.env.REFRESH__TOKEN as string, (err, user: any) => {
                if (err) throw new Error('Vui lòng đăng nhập lại');

                const accessToken = Token.createAccessToken({ id: user.id, name: user.name });
                return accessToken;
            });
            return token;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    createBMIs: async (body: BMIModel) => {
        try {
            const { gender, height, weight, yearOfBirth } = body;
            const user = await Users.findOne({ _id: body.idUser });
            if (!user) throw new Error('Không tồn tại user');
            const bmi = CalculateBmi(gender!, weight!, height!, yearOfBirth!);
            const newBMI = new BMIs({
                ...body,
                bmi,
            });
            const resultBMI = await newBMI.save();
            await user.updateOne({ bmiId: resultBMI.id });
            return resultBMI;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    getBMI: async (idUser: string) => {
        try {
            const bmi = await BMIs.findOne({ idUser: idUser });
            if (!bmi) throw new Error('Vui lòng kiểm tra lại');
            return bmi;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    getInfoUser: async (idUser: string) => {
        try {
            const user = await Users.findOne({ idUser: idUser }).populate('bmiId', '-_id -idUser');
            if (!user) throw new Error('Vui lòng kiểm tra lại');
            return user;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
};

export default UserServices;

const CalculateBmi = (gender: number, weight: number, height: number, yearOfBirth: number) => {
    const date = new Date();
    const age = date.getFullYear() - yearOfBirth;
    if (gender === 0) return 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
    return 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
};
