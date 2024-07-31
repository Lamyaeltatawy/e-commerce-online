import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { RouterModule } from '@angular/router';
import { ProductsModule } from 'src/products/products.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, TruncatePipe,LayoutComponent],
})
export class SharedModule { }
