import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '../../../model/json-response.class';
import { PR } from '../../../model/pr.class';
import { PrService } from '../../../service/pr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pr-create',
  templateUrl: './pr-create.component.html',
  styleUrls: ['./pr-create.component.css']
})
export class PrCreateComponent implements OnInit {
    title: string = "PR-Create";
    jr: JsonResponse;
    pr: PR = new PR();
    
    create() {
      this.prSvc.create(this.pr)
      .subscribe(
        jresp => {
          this.jr=jresp;
          //assume a good call, fwd to User-List
        this.router.navigate(['/pr/list']);
        });
        }

        constructor(
          private prSvc: PrService, 
          private router: Router
         ) { }

  ngOnInit() {
  }

}
