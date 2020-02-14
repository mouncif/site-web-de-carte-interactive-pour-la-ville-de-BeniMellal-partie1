import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';
import { DetailcourComponent } from '../../consult/detailcour/detailcour.component';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-mescours',
  templateUrl: './mescours.component.html',
  styleUrls: ['./mescours.component.scss']
})
export class MescoursComponent implements OnInit {

  @Input() detail: DetailcourComponent;
  mycour = [];

  constructor(private formservice : FormationService, private sharedService : SharedDataService) { }

  ngOnInit() {
    const idUser = this.sharedService.getCurrentUser().id;
    this.formservice.getMescours().subscribe((data: any[])=>{
      this.mycour = data.filter(cour => cour.idUser == idUser);
    

    } )

  }

  consulte(id) {
    this.sharedService.setCurrentFormation(id);
  }

}
