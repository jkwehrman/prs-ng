import { Component, OnInit } from '@angular/core';
import { Prli } from '../../../../app/model/prli.class';
import { PrliService } from '../../../service/prli.service';
import { JsonResponse } from '../../../../app/model/json-response.class';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../../app/model/product.class';
import { ProductService } from '../../../service/product.service';



@Component({
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
})
export class PrliCreateComponent implements OnInit {
    
    jr: JsonResponse;
    prli: Prli = new Prli();
    title: string;
    products: Product[];

  constructor(
    private prliSvc: PrliService, 
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(
  ) {
    this.productService.list().subscribe(
      jresp => {
        this.jr=jresp;
      this.products = this.jr.data as Product[];
      }
    )
    }
    
    create() {
      this.prliSvc.create(this.prli)
      .subscribe(
        jresp => {
          this.jr=jresp;
          console.log(jresp);
          //assume a good call, fwd to User-List
        this.router.navigate(['/prli/list']);
        });
        }
    
      }
