import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/shared/shared.module';
import { CartsModule } from 'src/carts/carts.module';
import { ProductsModule } from 'src/products/products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SharedModule,CartsModule,ProductsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
