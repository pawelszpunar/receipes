import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from './../shared/ingredient-model';

@Injectable()

export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient('Milk', 1),
        new Ingredient('Apple', 2)
    ];

    addedIngredient = new EventEmitter<Ingredient[]>();

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.addedIngredient.emit(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.addedIngredient.emit(this.ingredients.slice());
    }

}