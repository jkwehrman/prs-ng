import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../../model/vendor.class';
import { VendorService } from '../../../../app/service/vendor.service';
import { JsonResponse } from '../../../../app/model/json-response.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  jr: JsonResponse;
  vendors: Vendor[];
  title:string= "Vendor-List"; 

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
