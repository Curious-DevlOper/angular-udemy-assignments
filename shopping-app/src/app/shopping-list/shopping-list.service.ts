import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient-model";

export class ShoppingListService { 
  ingredientChanged = new EventEmitter<Ingredient[]>(); 

  private ingredients: Ingredient[]= [
    new Ingredient ('Apples', 5),
    new Ingredient ('oranges', 15),
  ];

  getIngredients(){
    // return ingredients, but a copy of it
    return this.ingredients.slice(); 
  }

  addIngredient ( ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients); 
    //the value we pass here is our original ingredients
  }
}