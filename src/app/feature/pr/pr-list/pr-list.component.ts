import { Component, OnInit } from '@angular/core';
import { PR } from '../../../../app/model/pr.class';
import { PrService } from '../../../service/pr.service';
import { JsonResponse } from '../../../../app/model/json-response.class';


@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PRListComponent implements OnInit {
  jr: JsonResponse;
  prs: PR[];
  title:string = "PR-List"; 
  // sortCriteria: string = "id";
  // sortOrder: string = "asc";

  constructor(private prSvc: PrService) { }

  ngOnInit() {
    this.prSvc.list().subscribe(
      jresp => {
        this.jr = jresp;
        this.prs = this.jr.data as PR[];
      }
    );

      }
    
      // sortBy(column: string): void {
      //   if(this.sortCriteria === column) {
      //     this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      //   } else {
      //     this.sortCriteria = column;
      //     this.sortOrder = 'asc';
      //   }
      // }
    

    }
