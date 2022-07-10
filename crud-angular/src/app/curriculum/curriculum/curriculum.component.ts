import { CurriculumService } from './../services/curriculum.service';
import { Curriculum } from './../model/curriculum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  curriculum: Curriculum[] = [];
  displayedColumns = ['nome', 'competencias', 'vagaDesejada', 'numeroContato', 'linkedin'];

  ///curriculumService: CurriculumService;

  constructor(private curriculumService: CurriculumService ) {
    // this.curriculum = [];
    //this.curriculumService = new CurriculumService;
    this.curriculum = this.curriculumService.list();
  }

  ngOnInit(): void {
  }

}
