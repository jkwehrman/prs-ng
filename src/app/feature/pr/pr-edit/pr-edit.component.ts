import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '../../../model/json-response.class';
import { PR } from '../../../model/pr.class';
import { PrService } from '../../../service/pr.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pr-edit',
  templateUrl: './pr-edit.component.html',
  styleUrls: ['./pr-edit.component.css']
})
export class PrEditComponent implements OnInit {

  title: string = "PR Edit";
  prIdStr: string;
  jr: JsonResponse;
  pr: PR;

  constructor(private prSvc: PrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.prIdStr = params['id']);
    this.prSvc.get(this.prIdStr).subscribe(jresp => {
      console.log(jresp);
      this.jr = jresp;
      this.pr = this.jr.data as PR;
    });
  }

  edit() {
    this.prSvc.edit(this.pr).subscribe(
      jresp => {
        this.jr = jresp;
        this.pr = this.jr.data as PR;
        this.router.navigate(['/pr/list']);
      }
    );
  }
}