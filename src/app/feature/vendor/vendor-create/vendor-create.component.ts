import { Component, OnInit } from '@angular/core';
import { Vendor } from './../../../../app/model/vendor.class';
import { VendorService } from './../../../../app/service/vendor.service';
import { JsonResponse } from './../../../../app/model/json-response.class';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
    jr: JsonResponse;
    vendors: Vendor[];
    title:string; 
  
    constructor(private vendorSvc: VendorService) { }
  
    ngOnInit() {
      this.vendorSvc.list().subscribe(
        jresp => {
          this.jr = jresp;
          if (this.jr.errors==null) {
          this.vendors = this.jr.data as Vendor[];
          console.log(this.vendors);
        }
        else {
          //There is a problem.  Implement error handling
          console.log("Error getting vendors");
        }
      }
      )
    }
  }