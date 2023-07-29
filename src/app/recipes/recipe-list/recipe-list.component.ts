import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe [] = [
    new Recipe('First test recipe', 'this is simply a test', '../assets/imgs/recipe-one.jpg'),
    new Recipe('second test recipe', 'this is simply a test', '../assets/imgs/recipe-one.jpg')


  ];

}
