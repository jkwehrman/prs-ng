import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '../../../model/json-response.class';
import { Product } from '../../../model/product.class';
import { ProductService } from '../../../service/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    title: string = "Product Edit";
    productIdStr: string;
    jr: JsonResponse;
    product: Product;

 constructor(private productSvc: ProductService,
  private router: Router,
  private route: ActivatedRoute) { }

 ngOnInit() {
    this.route.params.subscribe(params => 
            this.productIdStr = params['id']);
    this.productSvc.get(this.productIdStr).subscribe(jresp => {
      this.jr = jresp;
      this.product = this.jr.data as Product;
    });
    
  }
    
  edit() {
    this.productSvc.edit(this.product).subscribe(
      jresp => {
        this.jr = jresp;
        this.product = this.jr.data as Product;
        this.router.navigate(['/product/list']);
      }
    );
  }

}