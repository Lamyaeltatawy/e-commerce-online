import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './components/other/other.component';



@NgModule({
  declarations: [
    OtherComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OtherComponent
  ]
})
export class OthersModule { }
