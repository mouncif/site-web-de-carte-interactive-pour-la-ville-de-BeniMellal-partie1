import { Injectable } from '@angular/core';
import{FormGroup,FormControl,Validators}from"@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Formations } from '../model/formations';
import { User } from '../model/user';
import { SharedDataService } from '../shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  
  private data_api = "http://localhost:3000/formation";
  private mycourses = "http://localhost:3000/mycours";
  private users = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient, private sahredService: SharedDataService) { }

  getCours () {
    return this.httpClient.get(this.data_api);
  };
  addCours(formation) { 
    formation.idUser = this.sahredService.getCurrentUser().id;
    formation.id = formation.id +"-"+formation.idUser;
    return this.httpClient.post<Formations>(this.mycourses,formation);
  }
  getMescours() {
    return this.httpClient.get(this.mycourses)
  }

  getdetail(id){
    return this.httpClient.get(this.mycourses +'/'+id)
  }

  Auth() {
    return  this.httpClient.get<User[]>(this.users);
  }





  }


