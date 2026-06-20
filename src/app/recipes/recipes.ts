import { Component } from '@angular/core';

import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  standalone: false,
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
  providers: [RecipeService]
})
export class Recipes {
  constructor() { }

  ngOnInit() {

  }
}
