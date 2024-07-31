import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { RouterModule } from '@angular/router';
import { ProductsModule } from 'src/products/products.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
    TruncatePipe,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [
    HeaderComponent,
     FooterComponent,
      SidebarComponent,
       TruncatePipe,
       LayoutComponent,
       SpinnerComponent,
       SelectComponent
      ],
})
export class SharedModule { }
