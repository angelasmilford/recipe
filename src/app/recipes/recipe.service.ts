import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://assets.heartfoundation.org.nz/images/all-shared-sections/recipes/cocoa-rice.webp?mtime=1669000875'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://assets.heartfoundation.org.nz/images/all-shared-sections/recipes/cocoa-rice.webp?mtime=1669000875')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}