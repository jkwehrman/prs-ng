import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '../../../model/json-response.class';
import { Product }      from '../../../model/product.class';
import { ProductService } from '../../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

    title: string = "Product-Create";
    jr: JsonResponse;
    product: Product = new Product();
   
    constructor(private productSvc: ProductService,
   private router: Router) { }

  ngOnInit() {
  }
 create() {
 this.productSvc.create(this.product)
 .subscribe(
   jresp => {
     this.jr=jresp;
   this.router.navigate(['/product/list']);
   });
   }
 }
 
 
 