import { HttpStatusCode } from './../utils/HandleError';
import { Request, Response } from 'express';
import RecipeService from '../services/Recipe.service';
const RecipeController = {
    createPost: async (req: Request, res: Response) => {
        console.log(req.body);

        const content = {
            ...req.body,
            idUser: req.user,
        };
        const result = await RecipeService.createPost(content);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', data: result._id });
    },
    getPost: async (req: Request, res: Response) => {
        const id = req.params.id;
        const result = await RecipeService.getPost(id);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', data: result });
    },
    getAllRecipe: async (req: Request, res: Response) => {
        const { page } = req.query;
        const result = await RecipeService.getAllRecipe(Number(page) || 0);

        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', data: result });
    },
};

export default RecipeController;
