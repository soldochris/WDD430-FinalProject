import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { TopComponent } from './top/top.component';
import { MyCoinsComponent } from './my-coins/my-coins.component';
import { TopItemComponent } from './top/top-item/top-item.component';
import { CoinsListComponent } from './my-coins/coins-list/coins-list.component';
import { CoinEditComponent } from './my-coins/coin-edit/coin-edit.component';
import { CoinDetailComponent } from './my-coins/coin-detail/coin-detail.component';
import { CoinItemComponent } from './my-coins/coins-list/coin-item/coin-item.component';
import { HttpClientModule } from '@angular/common/http';
import { MyCoinsFilterPipe } from './my-coins/my-coins-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TopComponent,
    MyCoinsComponent,
    TopItemComponent,
    CoinsListComponent,
    CoinEditComponent,
    CoinDetailComponent,
    CoinItemComponent,
    MyCoinsFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
