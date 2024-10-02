import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() language =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  switchLanguage(event:any) {
    console.log("event",event.target.value);
    
    this.language.emit(event.target.value);
  }
}
