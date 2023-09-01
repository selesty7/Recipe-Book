 import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './header/auth/auth.component';
import { AuthGuard } from './header/auth/auth.guard';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipesResolverService } from './recipe/recipe-start/recipes-resolver.service';
import { RecipeComponent } from './recipe/recipe.component';
import{ShoppingListComponent} from './shopping-list/shopping-list.component'
 const appRoutes: Routes = [
     {path:'',redirectTo: '/recipes',pathMatch:'full'},
     {path:'recipes', component:RecipeComponent,children:[
         {path:'', component:RecipeStartComponent,canActivate:[AuthGuard]},
         {path:'new',component:RecipeEditComponent},
         {path:':id',component:RecipeDetailComponent,resolve:[RecipesResolverService]},
         { path:':id/edit',component:RecipeEditComponent,resolve:[RecipesResolverService] }
     ]},
     {path:'shopping-list', component:ShoppingListComponent},
     {path:'auth',component:AuthComponent}
 ];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
 })
export class AppRoutingModule { }
