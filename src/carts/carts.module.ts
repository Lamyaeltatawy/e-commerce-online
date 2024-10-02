import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule
  ],
  exports:[CartComponent]
})
export class CartsModule { }
