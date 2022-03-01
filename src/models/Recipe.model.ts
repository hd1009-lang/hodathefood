import { ResponseRecipeBefore } from './../Types/Recipe';
import mongoose, { Schema } from 'mongoose';
type IRecipeModel = ResponseRecipeBefore & mongoose.Document;
const RecipeSchema = new Schema(
    {
        _id: {
            type: String,
            required: true,
            trim: true,
        },
        img: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        idCate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'cates',
        },
        idUser: {
            type: String,
            ref: 'users',
        },
        ingredients: [
            {
                idIngredient: {
                    type: String,
                    ref: 'ingredients',
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
        totalRecipe: {
            calo: { type: Number, required: true, default: 0 },
            protein: { type: Number, required: true, default: 0 },
            fat: { type: Number, required: true, default: 0 },
            carb: { type: Number, required: true, default: 0 },
        },
        data: {
            type: Array,
            default: [
                {
                    content: {
                        type: String,
                        required: true,
                    },
                    img: Array,
                },
            ],
        },
    },
    {
        timestamps: true,
    }
);

const Recipes = mongoose.model<IRecipeModel>('recipes', RecipeSchema);
export default Recipes;
