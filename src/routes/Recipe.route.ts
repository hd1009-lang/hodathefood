import express from 'express';
import RecipeController from '../controllers/Recipe.controller';
import { AuthenticateToken } from '../middlewares/authAction';
import { asyncMiddle } from '../utils/HandleError';

const router = express.Router();

router.post('/create', AuthenticateToken, asyncMiddle(RecipeController.createPost));
router.post('/update', AuthenticateToken, asyncMiddle(RecipeController.updateRecipe));
router.get('/:id', asyncMiddle(RecipeController.getPost));
router.get('/dash/list', AuthenticateToken, asyncMiddle(RecipeController.getRecipeOfUser));
router.get('/', asyncMiddle(RecipeController.getAllRecipe));
export default router;
