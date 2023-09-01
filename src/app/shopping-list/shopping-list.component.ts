import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]
  
  private igChangedSub:Subscription;
  constructor(private shoppingListService:ShoppingListService) { 

  }

  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredients();
    this.igChangedSub=this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
      }
    )
    
  }
  onEdit(index:number){
this.shoppingListService.startedEditing.next(index);
  }
ngOnDestroy():void{
  this.igChangedSub.unsubscribe();
}
}
