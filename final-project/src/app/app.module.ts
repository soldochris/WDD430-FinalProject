import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { TopComponent } from './top/top.component';
import { MyCoinsComponent } from './my-coins/my-coins.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TopComponent,
    MyCoinsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
