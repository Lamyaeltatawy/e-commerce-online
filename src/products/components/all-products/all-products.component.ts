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

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories()
  }
  // filterCategory(event: any) {
  //   this.loading=true;

  //   if (event.target.value === 'all') {
  //     this.getProducts()

  //   } else {
  //     this.service.GetFilteredProducts(event.target.value).subscribe((res: any) => {
  //       this.productsList = res;
  //       this.loading=false;

  //     })
  //   }
  // }
  getProducts() {
    this.loading=true;

    this.service.GetAllProducts().subscribe((products: any) => {
      console.log(this.loading);
      this.productsList = products
      this.loading=false;
      console.log(this.loading);


    }, (err) => {

    })
  }
  filterproducts(event:any){
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
      this.loading=false;
      this.getProducts()

    } else {
      this.loading=false;
      this.filterproducts(event)
    }
  }
}
