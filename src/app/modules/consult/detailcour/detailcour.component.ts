import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';
import * as jspdf from 'jspdf';  
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-detailcour',
  templateUrl: './detailcour.component.html',
  styleUrls: ['./detailcour.component.scss']
})
export class DetailcourComponent implements OnInit {
  
  @ViewChild('content',{static: false}) content : ElementRef ;
  formation = {};


  constructor(private formservice:FormationService, private sharedService : SharedDataService) { }

  ngOnInit() {
    console.log(this.sharedService.getCurrentFormation())
    this.formservice.getdetail(this.sharedService.getCurrentFormation()).subscribe((data: any[])=>{
      this.formation = data;
      console.log(this.formation);
    } )
  }

  telecharger() {
    let doc  = new jspdf ();
    let  specialDocuemnt = {
    '#editor' : function (element ,render) {
    return true
      }};
      let content = this.content.nativeElement ;
      doc.fromHTML (content.innerHTML,15,15 ,{
      'with' : 190,
      'elementHandlers' : specialDocuemnt
      });
      doc.save('Myformations.pdf') 
    
      }  




  }


