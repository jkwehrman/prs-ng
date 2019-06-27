import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../../service/system.service';
import { User } from '../../../model/user.class';
import { JsonResponse } from '../../../model/json-response.class';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
  message: string = 'No errors yet';
  user: User = new User();
  jr: JsonResponse;

  constructor(private userSvc: UserService,
    private sysSvc: SystemService,
    private router: Router) { }

  login() {
    this.userSvc.login(this.user)
      .subscribe(jresp =>  {
        console.log(jresp);
        this.jr = jresp;
        if (this.jr.errors == null) {
          this.user = this.jr.data as User;
          this.sysSvc.data.user.instance = this.user;
          this.sysSvc.data.user.loggedIn = true;
          this.router.navigateByUrl('/user/list');
        }
        else {
          this.message = "Invalid Username / Password combo.  Retry";
        }
      })
  }
  ngOnInit() {
    // defaulting uname and pwd for testing purposes
    this.user.userName = 'j';
    this.user.password = 'j';
  }

}
