import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/auth/components/login/login.component';
import { CartComponent } from 'src/carts/components/cart/cart.component';
import { AllProductsComponent } from 'src/products/components/all-products/all-products.component';
import { ProductDetailsComponent } from 'src/products/components/product-details/product-details.component';
import { LayoutComponent } from 'src/shared/components/layout/layout.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
    {path:'',redirectTo:'products', pathMatch:'full' },
    { path: 'products', component: AllProductsComponent },
    { path: 'details/:id', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent },
  ]},
  {path:'login',component:LoginComponent},
  // { path: '**', redirectTo: 'products', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
