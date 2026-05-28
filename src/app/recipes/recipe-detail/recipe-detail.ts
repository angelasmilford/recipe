import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.html',
  styles: ``,
})
export class RecipeDetail {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {

  }
}
