import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { CurriculumFormComponent } from './curriculum-form/curriculum-form.component';



@NgModule({
  declarations: [
    CurriculumComponent,
    CurriculumFormComponent
  ],
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class CurriculumModule { }
