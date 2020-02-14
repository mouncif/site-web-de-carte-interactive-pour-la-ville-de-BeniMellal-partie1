import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';
import { Cours } from 'src/app/model/cours';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

  monCours: Cours = {
    titre: '',
    description: '',
    contenu: '',
    nomF:'',
    duree :'',
 

  };

  SearchText = '';
  showForm = false;
  editForm = false;

  cours: Cours[] = [];
  resultCours: Cours[] = [];
  constructor(private coursService: CoursService) { }

  ngOnInit(): void {
    this.getCours();
  }

  getCours() {
    this.coursService.findAll().
    subscribe(cours => {
      this.resultCours = this.cours = cours;
    });
  }

  // deleteCours(cours: Cours) {
  //   this.coursService.delete(cours).subscribe((res: Cours) =>{
  //   console.log(this.cours.indexOf(cours));
  //   let ind: number = this.cours.indexOf(cours) + 1;

  //     // this.cours = this.cours.filter(cours => cours.id !== id);
  //     this.cours = this.cours.splice(ind, 1);
  //   });
  // }

  deleteCours(cours: Cours){
    this.coursService.delete(cours).subscribe((res) => {
      this.cours.splice(this.cours.indexOf(cours), 1);
    });
  }

  persistCours() {
    this.coursService.persist(this.monCours).subscribe((cours) => {
      // this.cours = [cours, ...this.cours];
      this.cours.push(cours);
      this.resetField();
      this.showForm = false;
    });
  }

  resetField() {
    this.monCours = {
      titre: '',
      description: '',
      contenu: '',
      nomF :'',
      duree: ''
    };
  }

  editCours(cours){
    this.monCours = cours;
    this.editForm = true;
  }

  updateCours() {
    this.coursService.update(this.monCours).subscribe(cours => {
      this.resetField();
      this.editForm = false;
    });
  }

  searchCours(){
    this.resultCours = this.cours.filter((cours) =>
    cours.titre.toLowerCase().includes(this.SearchText.toLowerCase()))

  }
}
