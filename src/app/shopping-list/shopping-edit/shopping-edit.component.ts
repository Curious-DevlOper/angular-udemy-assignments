 import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true } ) amountInputRef: ElementRef;
 
  @Output() ingredientAdded= new EventEmitter<Ingredient>(); //{name: string, amount: number}

  onAddItem() {
    //emit a new event to a pass data to parent(shoppinglist component)
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngrdient = new Ingredient (ingName, ingAmount);
    this.ingredientAdded.emit(newIngrdient);

  }

}
