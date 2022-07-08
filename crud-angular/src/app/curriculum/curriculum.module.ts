import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumComponent } from './curriculum/curriculum.component';


@NgModule({
  declarations: [
    CurriculumComponent
  ],
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    MatTableModule
  ]
})
export class CurriculumModule { }
