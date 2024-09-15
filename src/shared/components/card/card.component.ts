import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data:any;
  @Output() selectedProductId =new EventEmitter();
  clicked: boolean =false;

  constructor() { }

  ngOnInit(): void {
  }
  selectedProduct(product:any){
    this.clicked=true
    this.selectedProductId.emit(product)
  }
}
