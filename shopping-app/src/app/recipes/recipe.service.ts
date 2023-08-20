import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class  RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe [] = [ 
        new Recipe('First test recipe', 'this is simply a test', './assets/recipte-one.jpg'),
        new Recipe('second test recipe', 'this is simply a test', './assets/recipte-one.jpg')
      ];  

      //slice() will return a new array which is exact copy of the one in this service file
    getRecipes() {
        return this.recipes.slice();
    } 
    // to inform another component that we selected an item
}