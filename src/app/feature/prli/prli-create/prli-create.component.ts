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
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
})
export class PrliCreateComponent implements OnInit {
    
    jr: JsonResponse;
    prli: Prli = new Prli();
    title: string;
    products: Product[];
    prid: number;
    pr: PR;

  constructor(
    private prliSvc: PrliService, 
    private prSvc: PrService,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(
  ) {
    this.prid = this.route.snapshot.params.id;
    this.prSvc.get(this.prid.toString()).subscribe(jresp => {
      let jsresp = jresp;
      this.pr = jsresp.data as PR;
    });
    this.productService.list().subscribe(
      jresp => {
        this.jr=jresp;
      this.products = this.jr.data as Product[];
      }
    )
    }
    
    create() {
      this.prli.purchaseRequest = this.pr;
      console.log("PRLI:", this.prli);
      this.prliSvc.create(this.prli)
      .subscribe(
        jresp => {
          this.jr=jresp;
          console.log(jresp);
        this.router.navigate(['/pr/lines/'+ Number(this.prid)]);
        });
        }
    
      }

