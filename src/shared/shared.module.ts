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
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
    TruncatePipe,
    SpinnerComponent,
    SelectComponent,
    CardComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule,RouterModule
  ],
  exports: [
    HeaderComponent,
     FooterComponent,
      SidebarComponent,
       TruncatePipe,
       LayoutComponent,
       SpinnerComponent,
       SelectComponent,
       CardComponent
      ],
})
export class SharedModule { }
