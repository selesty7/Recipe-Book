import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.module";

export class ShoppingListService{
    ingredientsChanged=new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
   private  ingredients:Ingredient[]=[
        new Ingredient('onion',10),
        new Ingredient('tomato',5)];

        getIngredients(){
            return this.ingredients.slice();
        }
        getIngredient(index:number){
            return this.ingredients[index];
        }
        addIngredient(ingredient:Ingredient){
            this.ingredients.push(ingredient);
         this.ingredientsChanged.next(this.ingredients.slice());
        }
        addIngredients(ingredient:Ingredient[]){
this.ingredients.push(...ingredient);
this.ingredientsChanged.next(this.ingredients.slice());

        }
        updateIngredient(index:number,newIngredient:Ingredient){
            this.ingredients[index]=newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice()) ; 
    
    }

    deleteIngredient(index:number){
this.ingredients.splice(index,1);
this.ingredientsChanged.next(this.ingredients.slice());
    }
}