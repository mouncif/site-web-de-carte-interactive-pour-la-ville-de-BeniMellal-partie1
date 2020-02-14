import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormationService } from 'src/app/services/formation.service';
import { SharedDataService } from 'src/app/shared-data.service';






@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cours = 0;
  mesCours = 0;
  mesCoursList = [];
  profs = 0;
  students = 0;


 

  constructor(private formservice : FormationService, private sharedService : SharedDataService) { }

  ngOnInit() {
    const idUser = this.sharedService.getCurrentUser().id;
    this.formservice.getCours().subscribe((data: any[])=>{
      
      this.cours = data.length;
    });
    this.formservice.getMescours().subscribe((data: any[])=>{
      this.mesCoursList = data.filter(cour => cour.idUser == idUser);
      this.mesCours = this.mesCoursList.length;
    });

    this.formservice.Auth().subscribe((res) => {
      this.profs = res.filter(user => user.type == "formateur").length;
      this.students = res.filter(user => user.type == "student").length; 
     });
  }

}
