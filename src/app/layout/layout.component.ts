import { SideNavService } from './../core/services/side-nav.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public isSideNavCollapsed = false
  constructor(private readonly sideNavService: SideNavService){}

  ngOnInit(): void {
    this.sideNavService.isNavCollapsed.subscribe(value => (this.isSideNavCollapsed = value));
  }
}
