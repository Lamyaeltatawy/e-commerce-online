import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/products/services/products.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  productsList: any[] = [];
  categoriesList: any[] = [];

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories()
  }
  filterCategory(event: any) {
    if (event.target.value === 'all') {
      this.getProducts()
    } else {
      this.service.GetFilteredProducts(event.target.value).subscribe((res: any) => {
        this.productsList = res;
      })
      console.log(event.target.value);
    }
  }
  getProducts() {
    this.service.GetAllProducts().subscribe((products: any) => {
      this.productsList = products
    }, (err) => {

    })
  }
  getCategories() {
    this.service.GetAllCategories().subscribe((res: any) => {
      this.categoriesList = res
    })
  }
}
