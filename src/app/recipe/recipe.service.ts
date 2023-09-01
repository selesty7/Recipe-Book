import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Ingredient } from "../shared/ingredient.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();
  // private recipes:Recipe[]=[
  //       new Recipe('A Test Recipe','This is simply a test recipe','https://riteeat.com/wp-content/uploads/2021/07/recipe-575434_1280.png',[new Ingredient('test',1)]),
  //       new Recipe('Pizza Recipe','This is delicious cheese burst pizza','https://th.bing.com/th/id/OIP.Ke3HjA920o_6KjKbzICVtwHaFj?pid=ImgDet&rs=1',[new Ingredient('Pizza Base',1),new Ingredient('cheese',1)]),
  //       new Recipe('Burger','Tastiest Burger in Town','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F07%2F13%2FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg&q=60',[new Ingredient('Bun',2)])
  //     ];
  private recipes:Recipe[]=[];
      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index:number){
        return this.recipes[index]
      }
      constructor(private slService:ShoppingListService){}
      setRecipes(recipe:Recipe[]){
        this.recipes=recipe;
        this.recipesChanged.next(this.recipes.slice());
      }

addIngredientsToShoppingList(ingredients:Ingredient[]){
this.slService.addIngredients(ingredients);
}
addRecipe(recipe:Recipe){
  this.recipes.push(recipe);
  this.recipesChanged.next(this.recipes.slice());
}
updateRecipe(index:number,newRecipe:Recipe){
  this.recipes[index]=newRecipe;
  this.recipesChanged.next(this.recipes.slice());
}
deleteRecipe(index:number){
  this.recipes.splice(index,1)
  this.recipesChanged.next(this.recipes.slice());

}
}
