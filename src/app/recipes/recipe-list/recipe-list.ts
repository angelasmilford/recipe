import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://assets.heartfoundation.org.nz/images/all-shared-sections/recipes/cocoa-rice.webp?mtime=1669000875'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://assets.heartfoundation.org.nz/images/all-shared-sections/recipes/cocoa-rice.webp?mtime=1669000875')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
