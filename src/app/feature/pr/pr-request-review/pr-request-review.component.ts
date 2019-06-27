// import { Component, OnInit } from '@angular/core';
// import { PR } from '../../../../app/model/pr.class';
// import { PrService } from '../../../service/pr.service';
// import { JsonResponse } from '../../../../app/model/json-response.class';
// import { Router, ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-pr-request-review',
//   templateUrl: './pr-request-review.component.html',
//   styleUrls: ['./pr-request-review.component.css']
// })

// export class PrRequestReviewComponent implements OnInit {
//     jr: JsonResponse;
//     prs: PR[];
//     title:string = "PR-List"; 
//     pr: PR;
//     purchaseRequest: PR;
//     // prSvc: PrService;



// //   constructor(private prSvc: PrService) { }
// //     private prService: PrService,
// //     // private productService: ProductService,
// //     private router: Router,
// //     private route: ActivatedRoute) { }

//   ngOnInit() {
//     // this.pr.purchaseRequest = this.pr;
//     // this.prSvc.listReview()
//     // .subscribe(
//     //   jresp => {
//         // this.jr = jresp;
//         // this.prs = this.jr.data as PR[];

//       }
//     // );

//       }



// // // export class PrRequestLinesComponent implements OnInit {
// // //   jr: JsonResponse;
// // //   prrequestlines: Prli[];
// // //   title: string = "PR-Request-Lines"
// // //   prIdStr: string;
// // //   pr: PR;
// // //   prli: Prli;


// // //   constructor(
// // //     private prliService: PrliService,
// // //     private prService: PrService,
// // //     private productService: ProductService,
// // //     private router: Router,
// // //     private route: ActivatedRoute) { }

// // //   compareFn(v1: Product, v2: Product): boolean {
// // //     if (v1 == null || v2 == null) return false;
// // //     return v1.id == v2.id;
// // //   }

import { Component, OnInit } from '@angular/core';
import { PR } from '../../../../app/model/pr.class';
import { PrService } from '../../../service/pr.service';
import { JsonResponse } from '../../../../app/model/json-response.class';


@Component({
  selector: 'app-pr-request-review',
  templateUrl: './pr-request-review.component.html',
  styleUrls: ['./pr-request-review.component.css']
})

export class PrRequestReviewComponent implements OnInit {
  jr: JsonResponse;
  prs: PR[];
  title:string = "PR-List"; 
  // sortCriteria: string = "id";
  // sortOrder: string = "asc";

  constructor(private prSvc: PrService) { }

  ngOnInit() {
    this.prSvc.list().subscribe(
      jresp => {
        this.jr = jresp;
        this.prs = this.jr.data as PR[];
      }
    );

      }
  

    }
