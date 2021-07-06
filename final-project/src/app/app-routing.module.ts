import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { TopComponent } from './top/top.component';
import { MyCoinsComponent } from './my-coins/my-coins.component';


const appRoutes: Routes = [
  {path:'',redirectTo:'/top', pathMatch: 'full'},
  {path:'top',component:TopComponent},
  {path:'myCoins',component:MyCoinsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
