import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
