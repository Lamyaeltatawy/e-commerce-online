import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate:TranslateService){
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
  }
  
  title = 'e-commerce';
  
  switchLanguage(lang: string) {
    this.translate.use(lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }
}
