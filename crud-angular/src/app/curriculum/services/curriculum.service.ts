import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Curriculum } from '../model/curriculum';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  private readonly API = '/assets/curriculum.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return   this.httpClient.get<Curriculum[]>(this.API).pipe(
      first(),
      tap(curriculum => console.log(curriculum))
    );
  }
}
