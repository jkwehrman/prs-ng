import { Component, OnInit } from '@angular/core';
import { Vendor } from './../../../../app/model/vendor.class';
import { VendorService } from './../../../../app/service/vendor.service';
import { JsonResponse } from './../../../../app/model/json-response.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  jr: JsonResponse;
  vendor: Vendor = new Vendor();
  title: string;

  create() {
    this.vendorSvc.create(this.vendor)
      .subscribe(
        jresp => {
          this.jr = jresp;
          //assume a good call, fwd to User-List
          this.router.navigate(['/vendor/list']);
        });
  }

  constructor(
    private vendorSvc: VendorService,
    private router: Router
  ) { }

  ngOnInit() {
  }
}