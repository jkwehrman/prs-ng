import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '../../../model/json-response.class';
import { PR } from '../../../model/pr.class';
import { PrService } from '../../../service/pr.service';
import { Router } from '@angular/router';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-pr-create',
  templateUrl: './pr-create.component.html',
  styleUrls: ['./pr-create.component.css']
})

export class PrCreateComponent implements OnInit {
  
    title: string = "PR-Create";
    jr: JsonResponse;
    
    purchaseRequest: PR = new PR();
    // authenticatedUser: User;

        constructor(
          private prSvc: PrService, 
          private sysSvc: SystemService,
          private router: Router
         ) { }
         
  ngOnInit() {
    if (this.sysSvc.data.user.loggedIn) {
      this.purchaseRequest.user = this.sysSvc.data.user.instance;
     } else {
        console.error("User not logged in.")
      }
    }
    
    create() {
      this.prSvc.create(this.purchaseRequest)
      .subscribe(
        jresp => {
          this.jr=jresp;
          console.log(jresp);
          //assume a good call, fwd to User-List
        this.router.navigate(['/pr/list']);
        });
        }
    
      }


