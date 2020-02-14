import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  currentFormation = 1;
  currentUser = {};

  constructor() { }

  setCurrentFormation(id) {
      this.currentFormation = id;
  }

  getCurrentFormation(){
      return this.currentFormation;
  }

  setCurrentUser(user) {
    this.currentUser = user;
  }

  getCurrentUser():any{
      return this.currentUser;
  }
}
