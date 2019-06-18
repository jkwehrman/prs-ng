// import { Component, OnInit } from '@angular/core';
// import { User } from 'src/app/model/user.class';
// import { UserService } from 'src/app/service/user.service';
// import { JsonResponse } from 'src/app/model/json-response.class';
// import { Product } from 'src/app/model/product.class';
// import { ProductService } from 'src/app/service/product.service';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
//   jr: JsonResponse;
//   products: Product[];
//   title:string; 

//   constructor(private productSvc: ProductService) { }

//   ngOnInit() {
//     this.productSvc.list().subscribe(
//       jresp => {
//         this.jr = jresp;
//         if (this.jr.errors==null) {
//         this.products = this.jr.data as Product[];
//         console.log(this.products);
//       }
//       else {
//         //There is a problem.  Implement error handling
//         console.log("Error getting products");
//       }
//     }
//     )
//   }
// }