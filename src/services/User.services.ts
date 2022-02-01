import { BMIModel } from './../Types/User';
import { UserRegister } from '../Types/User';
import BMIs from '../models/BMI.model';
import Users from '../models/User.model';
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
            throw new Error((error as Error).message);
        }
    },
    UpdateBMIs: async (body: BMIModel) => {
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
            throw new Error((error as Error).message);
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
