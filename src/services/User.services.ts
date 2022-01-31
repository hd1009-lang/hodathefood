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
            const user = await Users.findOne({ _id: body.idUser });
            if (!user) throw new Error('Không tồn tại user');
            const bmi = body.weight! + body.height!;
            const newBMI = new BMIs({
                ...body,
                bmi,
            });
            const resultBMI = await newBMI.save();
            const data = await user.update({ bmiId: resultBMI.id });
            return resultBMI;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },
};

export default UserServices;
