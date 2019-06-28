import { Component, OnInit } from '@angular/core';
import { User } from './../../../../app/model/user.class';
import { UserService } from './../../../../app/service/user.service';
import { JsonResponse } from './../../../../app/model/json-response.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  jr: JsonResponse;
  users: User[];
  title: string = "User-List";

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.list().subscribe(
      jresp => {
        this.jr = jresp;
        if (this.jr.errors == null) {
          this.users = this.jr.data as User[];
          console.log(this.users);
        }
        else {
          //There is a problem.  Implement error handling
          console.log("Error getting users");
        }
      }
    )
  }
}