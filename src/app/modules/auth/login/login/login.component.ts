import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {
    login: '',
    password: '',
    type :''
  };
  users: User[] = [];

  usersTypes = ['student','formateur'];

  constructor(private fService: FormationService,private router: Router, private sharedService : SharedDataService) { }

  ngOnInit() {
    this.fService.Auth().subscribe((res) => {
      this.users = res; 
    console.log(this.users);
     });
  }
  onLogin(){
    // console.log(this.user);
    let localLogin = this.user.login;
    let localPass = this.user.password;
    let localType = this.user.type ;
    let auth = false;
    let loggedUser = {};
    let redirectType = '';
    this.users.forEach(function (u: User, index) {
      if(u.login == localLogin && u.password == localPass && u.type ==localType ){
        auth = true;
        loggedUser = u;
        redirectType = localType;
        console.log(auth);
      }
    });

    this.sharedService.setCurrentUser(loggedUser);
    if(auth && redirectType =='student'){
      this.router.navigateByUrl('/posts');
    }
    if(auth && redirectType == 'admin') {
      this.router.navigateByUrl('/');
    }
    if (auth && redirectType == 'formateur') {
      this.router.navigateByUrl('/add');
    }
  
  }

}
