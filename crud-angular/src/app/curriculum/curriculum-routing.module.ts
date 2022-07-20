import { CurriculumFormComponent } from './curriculum-form/curriculum-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurriculumComponent } from './curriculum/curriculum.component';

const routes: Routes = [
  { path: '', component: CurriculumComponent },
  { path: 'new', component: CurriculumFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumRoutingModule { }
