import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumComponent } from './curriculum/curriculum.component';



@NgModule({
  declarations: [
    CurriculumComponent
  ],
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    AppMaterialModule
  ]
})
export class CurriculumModule { }
