import { Component, OnInit } from '@angular/core';
import { PR } from '../../../../app/model/pr.class';
import { PrService } from '../../../service/pr.service';
import { JsonResponse } from '../../../../app/model/json-response.class';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pr-detail',
  templateUrl: './pr-detail.component.html',
  styleUrls: ['./pr-detail.component.css']
})
export class PrDetailComponent implements OnInit {
  title: string = "Request Detail";
  prIdStr: string = "";
  jr: JsonResponse;
  pr: PR;

  constructor(private prSvc: PrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.prIdStr = params['id']);
    this.prSvc.get(this.prIdStr).subscribe(jresp => {
      this.jr = jresp;
      this.pr = this.jr.data as PR;
    });
  }

  remove() {
    this.prSvc.remove(this.pr).subscribe(
      jresp => {
        this.jr = jresp;
        this.pr = this.jr.data as PR;
        this.router.navigate(['/pr/list']);
      }
    );
  }

}
