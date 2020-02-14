import { Component, OnInit } from '@angular/core';
import { Userregister } from 'src/app/model/userregister';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userregister:Userregister =   {
    id : null,
    nom :'',
    prenom : '',
    email : '' ,
    password : '',
    type : 'student',
  }

  constructor(
    private registerService: RegisterService
  ) { }

  ngOnInit() {
  }

  save() {
    this.registerService.registerStudent(this.userregister)
      .subscribe(response => {
        console.log(response)
      });
  }

}
