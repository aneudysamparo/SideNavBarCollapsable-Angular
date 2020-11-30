import { LayoutRoutingModule } from './layout-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const DECLARATIONS = [
  LayoutComponent,
  SidebarComponent,
  TopNavbarComponent
]

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [...DECLARATIONS, TopNavbarComponent, SidebarComponent],
  exports: [...DECLARATIONS]
})
export class LayoutModule {

}
