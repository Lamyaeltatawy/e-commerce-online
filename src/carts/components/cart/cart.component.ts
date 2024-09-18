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
  total: number=0;

  constructor(private cdr:ChangeDetectorRef, private service:CartService) { }

  ngOnInit(): void {
    this.getData()
    this.getTotal()
    
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
    this.getTotal()
    this.cdr.detectChanges();

  }
  getTotal(){
    this.total=0
    this.data.forEach((element:any) => {
      this.total+=element.quantity * element.price
    })
  }
  addCart(){
    let model={
      userId:1,
      date:new Date(),
      products:this.data.map((item:any)=> {
        return  {productId:item.id , quantity:item.quantity}
      })
    }
    this.service.addCartService(model).subscribe(()=>{
      this.successMessage=true;
    })
  }

}
