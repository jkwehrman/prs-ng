import { PrliService } from '../../../service/prli.service';
import { Prli } from '../../../../app/model/prli.class';
import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '../../../model/json-response.class';
import { PR } from '../../../model/pr.class';
import { PrService } from '../../../service/pr.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product.class';



@Component({
  selector: 'app-pr-request-lines',
  templateUrl: './pr-request-lines.component.html',
  styleUrls: ['./pr-request-lines.component.css']
})
export class PrRequestLinesComponent implements OnInit {
  jr: JsonResponse;
  prrequestlines: Prli[];
  title: string = "PR-Request-Lines"
  prIdStr: string;
  pr: PR;


  constructor(
    private prliService: PrliService,
    private prService: PrService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {
    console.log("PRLINES");
    this.route.params.subscribe(params =>
      this.prIdStr = params['id']);

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

//   delete() {
//     this.prliService.remove(this.prli).subscribe(jresp => {
//       jresp => {
//         this.jr = jresp;
// console.log(jresp);
//         // this.pr = this.jr.data as PR;
//         // this.router.navigate(['/pr/list']);
//       }
//   );
// }


  // refresh() {
  //   console.log("PRLINES");
  //   this.route.params.subscribe(params =>
  //     this.prIdStr = params['id']);

  //   this.prService.get(this.prIdStr).subscribe(jrsep => {
  //     this.jr = jrsep;
  //     this.pr = this.jr.data as PR
  //     this.prliService.getLines(this.prIdStr).subscribe(jresp => {
  //       console.log("PRLIS:", jresp);
  //       this.jr = jresp;
  //       this.prrequestlines = this.jr.data as Prli[];
  //     });
  //   });
  // }
}
    
