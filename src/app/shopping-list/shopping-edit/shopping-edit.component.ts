import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient-model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: true}) ingredientName: ElementRef;
  @ViewChild('amountInput', {static: true}) ingredientAmount: ElementRef;
  //@Output() addedIngredient = new EventEmitter<Ingredient>();

  newIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient() {
    const newIngredient = this.shoppingListService.addIngredient(new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value));
  }


}
