import { SideNavService } from './../../core/services/side-nav.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {
  isCollapsed = true
  isSideNavCollapsed = false

  constructor(private readonly sideNavService: SideNavService) { }

  ngOnInit(): void {
    this.sideNavService.isNavCollapsed
      .pipe(tap(value => (this.isSideNavCollapsed = value) ))
      .subscribe()
  }

  toogleMenu(){
    this.sideNavService.isNavCollapsed.next(!this.isSideNavCollapsed)
  }

}
