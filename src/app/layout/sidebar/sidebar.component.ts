import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SideNavService } from 'src/app/core/services/side-nav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public isSideNavCollapsed = false
  constructor(private readonly sideNavService: SideNavService){}

  ngOnInit(): void {
    this.sideNavService.isNavCollapsed.subscribe(value => (this.isSideNavCollapsed = value));
  }

}
