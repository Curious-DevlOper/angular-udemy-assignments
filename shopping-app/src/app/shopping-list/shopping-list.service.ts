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

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // } //there is alot g unnessary event emitions

    this.ingredients.push(...ingredients);
    //spread operator:turn an array of element into a list of elements
    //spread our ingredients into a list of single ingredients
    //then emit that our ingredients has changed
    this.ingredientChanged.emit(this.ingredients.slice());

  }
}