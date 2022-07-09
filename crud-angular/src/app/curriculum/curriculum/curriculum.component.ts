import { Curriculum } from './../model/curriculum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  curriculum: Curriculum[] = [
    { _id: '1', nome: 'Anuar Samir', competencias: 'Python e Java', vagaDesejada: 'Dev Jr', numeroContato: '1234-5678'
    , linkedin: 'linkedin.com/in/samir-mamede/'}
  ];
  displayedColumns = ['nome', 'competencias', 'vagaDesejada', 'numeroContato', 'linkedin'];

  constructor() {
    // this.curriculum = [];
  }

  ngOnInit(): void {
  }

}
