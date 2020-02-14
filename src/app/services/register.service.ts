import { Injectable } from '@angular/core';
import{FormGroup,FormControl,Validators}from"@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Formations } from '../model/formations';
import { User } from '../model/user';
import { Userregister } from '../model/userregister';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private users = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient) { }

  registerStudent(student) { 
    return this.httpClient.post<Userregister>(this.users, student);
  }
}


