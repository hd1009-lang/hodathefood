import Cates from '../models/CategoryPost';
import { Category } from '../Types/Post';
const CateServices = {
    create: async (body: Category) => {
        try {
            const key = body.name.split(' ').join('-');
            const newCate = new Cates({
                ...body,
                key,
            });
            const data = await newCate.save();
            return data;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },
};
export default CateServices;
