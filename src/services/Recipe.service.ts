import { ResponseRecipeAfter, RecipeModelInput, ResponseRecipeIngredient, ResponseRecipeIngredientHandled } from './../Types/Recipe';
// import Cates from '../models/CategoryPost.model';
import Recipe from '../models/Recipe.model';
import Users from '../models/User.model';
import theDate from '../utils/HandleDate';
import Helper from '../utils/Regex';
import { ErrorApi } from './../utils/HandleError';

const PostService = {
    createPost: async (content: RecipeModelInput) => {
        try {
            const user = await Users.findById(content.idUser);
            if (!user) throw new Error('User không tồn tại');
            // const catePost = await Cates.findById(content.idCate);
            // if (!catePost) throw new Error('Thể loại không tồn tại');
            const id =
                Math.floor(1000 + Math.random() * 9000) +
                Helper.removeVietnameseTones(content.title!).split(' ').join('') +
                theDate.getTime();
            const newRecipe = await Recipe.create({ ...content, _id: id });
            return newRecipe;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    getPost: async (id: string) => {
        console.log(id);
        
        const data: ResponseRecipeIngredient[] = [];
        try {
            const detailPost = await Recipe.findById(id)
                .populate('idUser', '_id username')
                .populate({
                    path: 'ingredients',
                    populate: { path: 'idIngredient', select: 'name nutrition', populate: { path: 'idCate', select: 'name ' } },
                });
            detailPost?.ingredients?.forEach((item) => {
                data.push(item);
            });
            const handleIngredient = handleDataIngredientInfo(data);
            const handleInfo: ResponseRecipeAfter = {
                _id: detailPost?._id,
                data: detailPost?.data,
                ingredients: handleIngredient,
                img: detailPost?.img,
                title: detailPost?.title,
                idUser: detailPost?.idUser,
                totalRecipe: detailPost?.totalRecipe,
            };

            return handleInfo;
        } catch (error) {
            console.log((error as Error).message);
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    getAllRecipe: async (page: number) => {
        try {
            const result = await Recipe.find({})
                .sort({ updatedAt: -1 })
                .limit(10)
                .skip(10 * page);
            return result;
        } catch (error) {
            console.log((error as Error).message);
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    updateRecipe: async (data: RecipeModelInput) => {
        const recipe = await Recipe.findById({ _id: data._id });
        if (!recipe) {
            throw ErrorApi.BadRequest('Không tồn tại');
        }
        await recipe.updateOne(data);
        return recipe;
    },
    getRecipeOfUser: async (id: string, page: number) => {
        const result = await Recipe.find({ idUser: id })
            .sort({ updatedAt: -1 })
            .limit(10)
            .skip(10 * page);
        return result;
    },
};

const handleDataIngredientInfo = (data: ResponseRecipeIngredient[]) => {
    let handleAfterHandle: ResponseRecipeIngredientHandled[] = [];
    data.forEach((item) => {
        const ingredientHandled = {
            idCate: item.idIngredient.idCate._id,
            name: item.idIngredient.name,
            nameCate: item.idIngredient.idCate.name,
            nutrition: item.idIngredient.nutrition,
            quantity: item.quantity,
            _id: item.idIngredient._id,
        };
        handleAfterHandle.push(ingredientHandled);
    });
    return handleAfterHandle;
};

export default PostService;
