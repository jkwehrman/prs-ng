import { PrliService } from '../../../service/prli.service';
import { Prli } from '../../../../app/model/prli.class';
import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '../../../model/json-response.class';
import { PR } from '../../../model/pr.class';
import { PrService } from '../../../service/pr.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pr-request-lines',
  templateUrl: './pr-request-lines.component.html',
  styleUrls: ['./pr-request-lines.component.css']
})
export class PrRequestLinesComponent implements OnInit {
  jr: JsonResponse;
  prrequestlines: Prli[];
  title:string = "PR-Request-Lines"
    prIdStr: string;
    pr: PR;


  constructor(private prliService: PrliService,
    private prService: PrService,
  private router: Router,
    private route: ActivatedRoute) { }


ngOnInit() {
  this.route.params.subscribe(params => 
    this.prIdStr = params['id']);
    this.prService.get(this.prIdStr).subscribe(jresp => {
    this.jr = jresp;
    this.pr = this.jr.data as PR;
  });
}
}