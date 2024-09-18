import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartService } from 'src/carts/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data: any={};
  successMessage:boolean=false;

  constructor(private cdr:ChangeDetectorRef, private service:CartService) { }

  ngOnInit(): void {
    this.getData()
    
  }
  getData(){
    this.data=JSON.parse(localStorage.getItem('cart')!)
    console.log(JSON.parse(localStorage.getItem('cart')!));
  }
  clearCart(){
    localStorage.removeItem('cart');
    this.data=[];
    this.cdr.detectChanges();
  }
  deleteProduct(index:number){
    this.data.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(this.data))
    this.cdr.detectChanges();

  }
  addCart(){
    let model={
      userId:1,
      date:new Date(),
      products:this.data.map((item:any)=> {
        return  {productId:item.id , quantity:item.quantity}
      })
    }
    console.log("modellllllll",model);
    this.service.addCartService(model).subscribe(()=>{
      this.successMessage=true;
    })
  }
}
