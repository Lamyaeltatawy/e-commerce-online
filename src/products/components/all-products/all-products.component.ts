import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/products/services/products.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  productsList: any[] = [];
  categoriesList: any[] = [];
  loading:boolean=false;
  title:string="Category";
  cartProducts:any[]=[];

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories()
  }

  getProducts() {
    this.loading=true;

    this.service.GetAllProducts().subscribe((products: any) => {
      this.loading=false;
      console.log(this.loading);
      this.productsList = products


    }, (err) => {

    })
  }
  filterproducts(event:any){
    this.loading=true;
    this.service.GetFilteredProducts(event.target.value).subscribe((res: any) => {
      this.productsList = res;
      this.loading=false;

    })
  }
  getCategories() {
    this.service.GetAllCategories().subscribe((res: any) => {
      this.categoriesList = res
    })
  }
  reciveSelectedCategory(event:any){
     this.loading=true;

    if (event.target.value === 'all') {
      this.getProducts()
      this.loading=false;


    } else {
      this.filterproducts(event)
      this.loading=false;

    }
  }
  addProductToCart(product:any){
    console.log("producttt",product);
    
    
    if("cart" in localStorage ){
  
      this.cartProducts =JSON.parse(localStorage.getItem("cart")!)
 
      let exist = this.cartProducts.find((item)=>{
        return item.id.toString() === product.id.toString();
      })
      console.log("exist", exist);
      
      
      if(exist){
        
        alert("product is already in the cart");

      }else{ 
        this.cartProducts.push(product) 
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      } 
    }else{
      this.cartProducts.push(product)  
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }
}
