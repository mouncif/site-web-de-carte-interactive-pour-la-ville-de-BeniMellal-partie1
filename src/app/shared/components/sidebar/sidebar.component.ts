import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user = {};

  constructor(private sharedService : SharedDataService) { }

  ngOnInit() {
    this.user = this.sharedService.getCurrentUser();
  }

}
