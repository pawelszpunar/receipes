import { Component } from '@angular/core';
import { Recipe } from './../recipe.model';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Steak recipe', "That's awesome", 'https://mollysmtview.com/wp-content/uploads/2023/02/84_SMI_EASY-DINNER-KETO-CROCKPOT-RECIPES-1024x538.jpg'),
    new Recipe('Burger recipe', "You're gonna love it", 'https://c1.wallpaperflare.com/preview/949/1022/378/food-meal-snack-evening-meal.jpg')
  ];

  onSelectedRecipe(recipe: Recipe) {
  this.recipeWasSelected.emit(recipe);
  }

}
