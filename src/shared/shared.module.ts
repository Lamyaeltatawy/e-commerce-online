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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
    TruncatePipe,
    SpinnerComponent,
    SelectComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TruncatePipe,
    LayoutComponent,
    SpinnerComponent,
    SelectComponent,
    CardComponent,
  ],
})
export class SharedModule {}
