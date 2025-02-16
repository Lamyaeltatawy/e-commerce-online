import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
     HttpClientModule,
      SharedModule,
      FormsModule,
      TranslateModule

  ],
  exports: [
    AllProductsComponent,
    ProductDetailsComponent
  ],

})
export class ProductsModule { }
