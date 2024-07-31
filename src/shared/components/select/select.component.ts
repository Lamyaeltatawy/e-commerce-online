import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() label!:string;
  @Input() data!:any[];
  @Output() selectedValue = new EventEmitter()
  loading: boolean=false;
  // public selectedValue?:string;

  constructor() { }

  ngOnInit(): void {
  }
  filterCategory(event: any) {
  this.selectedValue.emit(event)
    // this.loading=true;

    // if (event.target.value === 'all') {
    //   this.getProducts()

    // } else {
    //   this.filterproducts()
    // }
  }
}
