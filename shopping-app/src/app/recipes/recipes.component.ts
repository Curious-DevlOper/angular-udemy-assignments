import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe : Recipe ;

  constructor(private recipeService: RecipeService) {}

  ngOnInit (){
    //subscried get informed on recipeSelected about the changes
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe ) => {
        this.selectedRecipe = recipe; 
        //this.selectedRecipe equal the event we get with the event
      }
    );
  }

}
