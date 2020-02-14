import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cours } from '../model/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  apiUrl = "http://localhost:3000/formation";

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Cours[]>(this.apiUrl);
  }

  delete(cours: Cours) {
    return this.http.delete<Cours>(`${this.apiUrl}/${cours.id}`);
  }

  persist(cours) {
    return this.http.post<Cours>(this.apiUrl, cours);
  }

  update(cours) {
    return this.http.put(`${this.apiUrl}/${cours.id}`, cours);
  }
}
