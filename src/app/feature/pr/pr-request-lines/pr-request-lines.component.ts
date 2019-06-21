import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '../../../model/json-response.class';
import { PrliService } from '../../../service/prli.service';
import { Prli } from '../../../../app/model/prli.class';

// export class PrRequestLinesService {
//   url: string = "http://localhost:8080/purchase-request-line-items/{id}";
  
@Component({
  selector: 'app-pr-request-lines',
  templateUrl: './pr-request-lines.component.html',
  styleUrls: ['./pr-request-lines.component.css']
})
export class PrRequestLinesComponent implements OnInit {
  jr: JsonResponse;
  prrequestlines: Prli[];
  title:string = "PR-Request-Lines"


  // constructor(private prSvc: PrService) { }
  constructor(private prliService: PrliService) { }

ngOnInit() {
  this.prliService.list().subscribe(
    jresp => {
      this.jr = jresp;
      this.prrequestlines = this.jr.data as Prli[];
    }
  );

    }

  }
