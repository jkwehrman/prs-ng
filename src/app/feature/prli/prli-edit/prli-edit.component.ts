import { Component, OnInit } from '@angular/core';
import { Prli } from '../../../../app/model/prli.class';
import { PrliService } from '../../../service/prli.service';
import { JsonResponse } from '../../../../app/model/json-response.class';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../../app/model/product.class';
import { ProductService } from '../../../service/product.service';
import { PrService } from '../../../service/pr.service';
import { PR } from '../../../model/pr.class';

@Component({
  selector: 'app-prli-edit',
  templateUrl: './prli-edit.component.html',
  styleUrls: ['./prli-edit.component.css']
})


export class PrliEditComponent implements OnInit {

  jr: JsonResponse;
  title: string;
  products: Product[];
  prid: number;
  pr: PR;
  prli: Prli;
  prliIdStr: string;

  constructor(
    private prliSvc: PrliService,
    private prSvc: PrService,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  compareFn(v1: Product, v2: Product): boolean {
    if(v1 == null || v2 == null) return false;
    return v1.id == v2.id;
  }

  ngOnInit(
  ) {
    this.prliIdStr = this.route.snapshot.params.id;

    this.productService.list().subscribe(
      jresp => {
        this.jr = jresp;
        this.products = this.jr.data as Product[];
      }
    )

    this.prliSvc.get(this.prliIdStr).subscribe(jresp => {
      let jr = jresp;
      this.prli = jr.data as Prli;
    });
  }

  // ngOnInit() {
  //   this.route.params.subscribe(params => 
  //           this.prIdStr = params['id']);
  //   this.productService.get(this.prIdStr).subscribe(jresp => {
  //     this.jr = jresp;
  // this.products = this.jr.data as Product[];
  //   });

  // }





  edit() {
    this.prli.purchaseRequest = this.pr;
    // console.log("PRLI:", this.prli);
    this.prliSvc.edit(this.prli)
      .subscribe(
        jresp => {
          this.jr = jresp;
          // console.log(jresp);
          this.router.navigate(['/pr/lines/' + Number(this.prid)]);
        });
  }

}




