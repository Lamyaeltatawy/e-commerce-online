import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/products/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: any ;
  productDetails: any;

  constructor(private service:ProductsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productId= this.route.snapshot.paramMap.get('id');
    console.log('Product ID:', this.productId);
    this.getdetails()
  }
  getdetails(){
    this.service.GetSingleProduct(this.productId).subscribe((res)=>{
      this.productDetails=res
      console.log(res);
      
      
    })
  }

}
