

import { Component, OnInit } from '@angular/core';
import { PR } from '../../../../app/model/pr.class';
import { PrService } from '../../../service/pr.service';
import { JsonResponse } from '../../../../app/model/json-response.class';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../../app/model/user.class';
import { SystemService } from '../../../service/system.service';


@Component({
  selector: 'app-pr-request-review',
  templateUrl: './pr-request-review.component.html',
  styleUrls: ['./pr-request-review.component.css']
})

export class PrRequestReviewComponent implements OnInit {
  jr: JsonResponse;
  prs: PR[];
  title:string = "PR-Request-Review"; 
  user: User;

// // //   prIdStr: string;
// // //   pr: PR;
// // //   prli: Prli;


  constructor
  ( private sysSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute,
    private prSvc: PrService,
    ) { }


  ngOnInit() {
    // user of users
    // this.sysSvc.data.user.loggedIn = this.sysSvc.data.user.instance;\
      if (this.sysSvc.data.user.loggedIn) {
        this.user = this.sysSvc.data.user.instance;
    console.log("USER:", this.user);
    this.prSvc.listReview(this.user)
    .subscribe(
      jresp => {
        this.jr = jresp;
        this.prs = this.jr.data as PR[];
      }
    );

      }
    }



    // ngOnInit() {
    //   if (this.sysSvc.data.user.loggedIn) {
    //     this.purchaseRequest.user = this.sysSvc.data.user.instance;
    //    } else {
    //       console.error("User not logged in.")
    //     }
    //   }
      
    //   create() {
    //     this.prSvc.create(this.purchaseRequest)
    //     .subscribe(
    //       jresp => {
    //         this.jr=jresp;
    //         console.log(jresp);
    //         //assume a good call, fwd to User-List
    //       this.router.navigate(['/pr/list']);
    //       });
          }
