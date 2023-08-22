
//a model is a blueprint for the obj we create
//new objs can be created based on the ste up we provide here

import { Ingredient } from "../shared/ingredient-model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient [];

    constructor(name: string, desc: string, imagePath: string, ingred: Ingredient[] ) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingred;

    }

} 