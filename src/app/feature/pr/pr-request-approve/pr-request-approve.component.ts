import { PrliService } from '../../../service/prli.service';
import { Prli } from '../../../../app/model/prli.class';
import { Component, OnInit, ɵɵcontainerRefreshEnd } from '@angular/core';
import { JsonResponse } from '../../../model/json-response.class';
import { PR } from '../../../model/pr.class';
import { PrService } from '../../../service/pr.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product.class';

@Component({
  selector: 'app-pr-request-approve',
  templateUrl: './pr-request-approve.component.html',
  styleUrls: ['./pr-request-approve.component.css']
})

export class PrRequestApproveComponent implements OnInit {
    jr: JsonResponse;
    prrequestlines: Prli[];
    title: string = "PR-Request-Lines"
    prIdStr: string;
    pr: PR;
    prli: Prli;

    constructor(
      private prliService: PrliService,
      private prService: PrService,
      private productService: ProductService,
      private router: Router,
      private route: ActivatedRoute) { }

      compareFn(v1: Product, v2: Product): boolean {
        if (v1 == null || v2 == null) return false;
        return v1.id == v2.id;
      }

  ngOnInit() {
   this.route.params.subscribe(params =>
    this.prIdStr = params['id']);
    
console.log( this.prIdStr);
      this.prService.get(this.prIdStr).subscribe(jrsep => {
          this.jr = jrsep;
          this.pr = this.jr.data as PR
          this.prliService.getLines(this.prIdStr).subscribe(jresp => {
            console.log("PRLIS:", jresp);
            this.jr = jresp;
            this.prrequestlines = this.jr.data as Prli[];
          });
        });
      }





  approve(pr: PR) {
    // console.log("PR:", pr);
    this.prService.approve(pr)
      .subscribe(
        jresp => {
          console.log("JRESP:", jresp);
          this.jr = jresp;
          this.router.navigate(['/pr/review']);
        })
  }
}