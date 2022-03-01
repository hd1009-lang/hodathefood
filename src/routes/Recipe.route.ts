import express from 'express';
import RecipeController from '../controllers/Recipe.controller';
import { AuthenticateToken } from '../middlewares/authAction';
import { asyncMiddle } from '../utils/HandleError';

const router = express.Router();

router.post('/create', AuthenticateToken, asyncMiddle(RecipeController.createPost));
router.get('/:id', asyncMiddle(RecipeController.getPost));
router.get('/', asyncMiddle(RecipeController.getAllRecipe));
export default router;
