import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient-model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class  RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe [] = [ 
        new Recipe('First test recipe', 'this is simply a test', './assets/recipte-one.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('french freis', 20)
        ]
        ),
        new Recipe('second test recipe', 'this is simply a test', './assets/recipte-one.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('french freis', 20)
        ]
        )
      ];  

    constructor(private shoppingListService: ShoppingListService){}

      //slice() will return a new array which is exact copy of the one in this service file
    getRecipes() {
        return this.recipes.slice();
    } 

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);

    }

    
}