import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';


const DECLARATIONS = [NotFoundComponent]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [
    CommonModule
  ],
  exports: [...DECLARATIONS]
})
export class SharedModule { }
