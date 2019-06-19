import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '../../../model/json-response.class';
import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-user-create',
 templateUrl: './user-create.component.html',
 styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
 title: string = "User-Create";
 jr: JsonResponse;
 user: User = new User();

 create() {
  this.userSVc.create(this.user)
  .subscribe(
    jresp => {
      this.jr=jresp;
      //assume a good call, fwd to User-List
    this.router.navigate(['/user/list']);
    });
    }

 constructor(
   private userSVc: UserService, 
   private router: Router
  ) { }

 ngOnInit() {
 }

}


