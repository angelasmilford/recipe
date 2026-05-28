import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipes/recipe.model';

@Component({
  selector: 'app-recipe-item',
  standalone: false,
  templateUrl: './recipe-item.html',
  styles: ``,
})
export class RecipeItem {
  @Input() recipe: Recipe; 

  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {

  }

  ngOnInit() {

  }

  onSelected() {
    this.recipeSelected.emit();
  }
}
