import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '../../../model/json-response.class';
import { Product }      from '../../../model/product.class';
import { ProductService } from '../../../service/product.service';
import { Router } from '@angular/router';
import { VendorService } from '../../../service/vendor.service';
import { Vendor }      from '../../../model/vendor.class';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title: string = "Product-Create";
  jr: JsonResponse;
  product: Product = new Product();
  vendors: Vendor[];

  constructor(private productSvc:ProductService,
              private vendorSvc:VendorService,
              private router:Router) { 
              } 

  ngOnInit() {
    console.log("1");
    this.vendorSvc.list().subscribe( 
      jresp => {
        console.log("2");
        this.jr = jresp;
        this.vendors = this.jr.data as Vendor[];
        console.log(this.vendors);
      }
    );
  }

  create() {
    this.productSvc.create(this.product).subscribe(
      jresp => {
        this.jr = jresp;
        // we are assuming a good call
        // not doing any error handling... yet
        this.router.navigate(['/product/list']);
      }
    )
  }

}