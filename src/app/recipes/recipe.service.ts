import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from "../shared/ingredient-model";
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

    constructor(private shoppingListService: ShoppingListService) {}

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Steak recipe', 
            "That's awesome", 
            'https://mollysmtview.com/wp-content/uploads/2023/02/84_SMI_EASY-DINNER-KETO-CROCKPOT-RECIPES-1024x538.jpg',
            [
                new Ingredient('Tomato', 2),
                new Ingredient('Meat', 1)
            ]),
        new Recipe(
            'Burger recipe', 
            "You're gonna love it", 
            'https://c1.wallpaperflare.com/preview/949/1022/378/food-meal-snack-evening-meal.jpg', 
            [
                new Ingredient('Fries', 30),
                new Ingredient('Salad', 1)
        ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}