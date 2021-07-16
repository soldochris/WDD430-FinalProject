import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { TopComponent } from './top/top.component';
import { MyCoinsComponent } from './my-coins/my-coins.component';
import { CoinEditComponent } from './my-coins/coin-edit/coin-edit.component';
import { CoinDetailComponent } from './my-coins/coin-detail/coin-detail.component';


const appRoutes: Routes = [
  {path:'',redirectTo:'/top', pathMatch: 'full'},
  {path:'top',component:TopComponent},
  {path:'myCoins',component:MyCoinsComponent,children:[
    {path: 'new', component: CoinEditComponent},
    {path:':_id', component: CoinDetailComponent},
    {path:':_id/edit',component: CoinEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
