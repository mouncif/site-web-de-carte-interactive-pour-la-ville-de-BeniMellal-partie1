import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';
import { Formations } from 'src/app/model/formations';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/shared-data.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {



  formatios = [];
  mycour = [];



  constructor( private formservice : FormationService ,private router: Router, private sharedService : SharedDataService) { }

  ngOnInit() {
    const idUser = this.sharedService.getCurrentUser().id;
    this.formservice.getMescours().subscribe((data: any[])=>{
      console.log(data);
      this.mycour = data.filter(cour => cour.idUser == idUser);
      this.mycour.forEach(element => {
        console.log(element.id, element.id.split("-")[0], "ii");
       });
  
    } )
    this.formservice.getCours().subscribe((data: any[])=>{
      console.log(data);

      this.formatios = data;
    
      this.formatios.forEach( formation => {
        formation.isAdded = this.mycour.filter(c => c.id.split("-")[0] == formation.id).length > 0; 
     });
  });
  
  }

  addcour (id) {

    if (window.confirm('voulez-vous vraiment ajouter ce cours')) {
    console.log(this.formatios.filter(x => x.id ===id ))
    this.formservice.addCours(this.formatios.find(x => x.id ===id )).toPromise();
    this.router.navigateByUrl('/mescours')

  }
  else {
    this.router.navigateByUrl('/posts')

  }


      

    }
  

}
