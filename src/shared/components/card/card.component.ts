import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data:any;
  @Output() selectedProductId =new EventEmitter();
  clicked: boolean =false;
  input:number=0
  constructor() { }

  ngOnInit(): void {
  }
  
  selectedProduct(product:any){
    product.clicked=false
    product.quantity=this.input
    this.selectedProductId.emit(product)

  }

}
