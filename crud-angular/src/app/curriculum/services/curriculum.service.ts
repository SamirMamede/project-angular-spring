import { Injectable } from '@angular/core';
import { Curriculum } from '../model/curriculum';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor() { }

  list(): Curriculum[] {
    return   [
      { _id: '1', nome: 'Anuar Samir', competencias: 'Python e Java', vagaDesejada: 'Dev Jr',
    numeroContato: '1234-5678', linkedin: 'linkedin.com/in/samir-mamede/'}
  ];
  }
}
