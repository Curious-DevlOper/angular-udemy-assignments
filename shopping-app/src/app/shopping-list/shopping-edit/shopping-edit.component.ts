 import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient-model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true } ) amountInputRef: ElementRef;
 
  constructor(private shoppingListService: ShoppingListService) {

  }
  onAddItem() {
    //emit a new event to a pass data to parent(shoppinglist component)
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient (ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);

  }

}
