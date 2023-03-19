import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: true}) ingredientName: ElementRef;
  @ViewChild('amountInput', {static: true}) ingredientAmount: ElementRef;
  @Output() addedIngredient = new EventEmitter<Ingredient>();

  addIngredient() {
    const newIngredient = new Ingredient(
      this.ingredientName.nativeElement.value, 
      this.ingredientAmount.nativeElement.value);
    this.addedIngredient.emit(newIngredient);
  }


}
