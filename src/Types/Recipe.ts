export interface RecipeModelInput {
    _id?: string;
    title?: string;
    idCate?: string;
    idUser?: string;
    img?: string;
    ingredients?: {
        idIngredient: string;
        quantity: number;
    }[];
    data?: StepModel[];
}
export interface StepModel {
    content: string;
    img?: string[];
}

export interface ResponseRecipeBefore {
    _id?: string;
    title?: string;
    idCate?: string;
    idUser?: string;
    img?: string;
    ingredients?: {
        idIngredient: {
            nutrition: {};
            _id: string;
            name: string;
            idCate: {
                name: string;
                _id: string;
            };
        };
        quantity: number;
    }[];
    data?: StepModel[];
}
export interface ResponseRecipeIngredient {
    idIngredient: {
        nutrition: {};
        _id: string;
        name: string;
        idCate: {
            name: string;
            _id: string;
        };
    };
    quantity: number;
}
export interface ResponseRecipeIngredientHandled {
    idCate: string;
    name: string;
    nameCate: string;
    nutrition: {};
    quantity: number;
    _id: string;
}
export interface ResponseRecipeAfter {
    _id?: string;
    title?: string;
    idCate?: string;
    idUser?: {};
    img?: string;
    ingredients?: ResponseRecipeIngredientHandled[];
    data?: StepModel[];
}
