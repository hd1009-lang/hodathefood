import { RecipeModelInput } from './../Types/Recipe';
import { HttpStatusCode } from './../utils/HandleError';
import { Request, Response } from 'express';
import RecipeService from '../services/Recipe.service';
import RecipeValidate from '../validates/Recipe.validate';
const RecipeController = {
    createPost: async (req: Request, res: Response) => {
        const content: RecipeModelInput = {
            ...req.body,
            idUser: req.user,
        };
        RecipeValidate.RecipeValidateCreate(content);
        const result = await RecipeService.createPost(content);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', data: result._id });
    },
    getPost: async (req: Request, res: Response) => {
        const id = req.params.id;
        const result = await RecipeService.getPost(id);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', data: result });
    },
    getRecipeOfUser: async (req: Request, res: Response) => {
        const id = req.user;
        const { page } = req.query;
        const result = await RecipeService.getRecipeOfUser(id as string, Number(page) || 0);

        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', data: result });
    },
    getAllRecipe: async (req: Request, res: Response) => {
        const { page } = req.query;
        const result = await RecipeService.getAllRecipe(Number(page) || 0);

        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', data: result });
    },
    updateRecipe: async (req: Request, res: Response) => {
        const content: RecipeModelInput = {
            ...req.body,
            idUser: req.user,
        };
        RecipeValidate.RecipeValidateCreate(content);
        const result = await RecipeService.updateRecipe(content);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', data: result._id });
    },
};

export default RecipeController;
