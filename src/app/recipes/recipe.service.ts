import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Koko Araisa', 
    //         'Samoan Cocoa Rice', 
    //         'https://assets.heartfoundation.org.nz/images/all-shared-sections/recipes/cocoa-rice.webp?mtime=1669000875',
    //         [
    //             new Ingredient('White Rice', 50),
    //             new Ingredient('Koko Samoa', 1),
    //             new Ingredient('Water', 8),
    //             new Ingredient('Coconut milk', 1),
    //             new Ingredient('Sugar', 100)
    //         ]
    //     ),
    //     new Recipe(
    //         'Roti', 
    //         'Fiji Indian Chicken Curry Roti Wrap', 
    //         'https://www.polynesia.com/contentassets/b4851aaa304f4318b5fd095798fef4b5/easy-to-grab-and-go-or-tasty-enough-for-a-sit-down-meal.webp',
    //         [
    //             new Ingredient('Flour', 2),
    //             new Ingredient('Salt', 1),
    //             new Ingredient('Water', 4),
    //             new Ingredient('Butter', 6)
    //         ]
    //     )
    // ];

    private recipes: Recipe[] = [];

    constructor(private slService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}